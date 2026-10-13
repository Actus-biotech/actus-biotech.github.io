/*
  Actus waitlist → Google Sheet.

  The site's "Join waitlist" form posts here (see the waitlist script in
  index.html); each new email becomes a row in the "Waitlist" tab:
  when, email, the page it came from and the referrer. An email already
  on the list isn't added twice.

  Set-up (once):
    1. Create a Google Sheet (e.g. "Actus waitlist").
    2. Extensions → Apps Script. Replace the code there with this file. Save.
    3. Deploy → New deployment → type "Web app".
         Execute as: Me
         Who has access: Anyone
       Deploy, and allow the access it asks for (Google warns it's an
       unverified app: it's your own script — Advanced → Go to …).
    4. Copy the Web app URL (it ends in /exec) into WAITLIST_SHEET in
       index.html.
  After editing this script, publish the change with Deploy → Manage
  deployments → Edit → Version: New version (the URL stays the same).
*/

const SHEET_NAME = 'Waitlist';
const HEADERS = ['Signed up', 'Email', 'Page', 'Referrer'];

function doPost(e) {
  const p = (e && e.parameter) || {};
  const email = String(p.email || '').trim().toLowerCase();
  if (p._honey || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'invalid' });
  }
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet();
    const last = sheet.getLastRow();
    if (last > 1) {
      const found = sheet.getRange(2, 2, last - 1, 1)
        .createTextFinder(email).matchEntireCell(true).findNext();
      if (found) return json({ ok: true, already: true });
    }
    sheet.appendRow([new Date(), cell(email), cell(p.page), cell(p.referrer)]);
    return json({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

// The tab, created with its header row the first time
function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

// Plain text in a cell, at most 300 characters; anything that would start
// a formula (= + - @) is kept as text
function cell(value) {
  const s = String(value || '').slice(0, 300);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
