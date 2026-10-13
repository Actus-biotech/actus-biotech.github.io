// Renders motion/actus-coach.html to assets/actus-coach.mp4 (and a poster
// frame), one frame at a time in headless Chrome, piped into ffmpeg.
//
//   npm i playwright        (once, anywhere on NODE_PATH; uses your installed Chrome)
//   brew install ffmpeg     (once)
//   node motion/render.mjs                 → the video + poster
//   node motion/render.mjs --stills 3,12   → just those frames, as PNGs in motion/stills/
//
// Run from the repo root, with a local server on the repo (any port):
//   python3 -m http.server 8767   (or set ACTUS_URL)

import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const URL = process.env.ACTUS_URL || 'http://localhost:8767/motion/actus-coach.html?capture';
const FPS = 30, SIZE = 1200;
const args = process.argv.slice(2);
const stillsArg = args.includes('--stills') ? args[args.indexOf('--stills') + 1] : null;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: SIZE, height: SIZE }, deviceScaleFactor: 1 });
await page.goto(URL);
await page.evaluate(() => window.ready);
const duration = await page.evaluate(() => window.DURATION);
const shot = () => page.locator('#stage').screenshot({ type: 'png' });

// frames are drawn in order (the chat's scrolling eases from frame to frame)
async function renderUpTo(t, from){
  await page.evaluate(([a, b, fps]) => { for (let x = a; x <= b + 1e-6; x += 1 / fps) window.render(x); }, [from, t, FPS]);
}

if (stillsArg) {
  mkdirSync('motion/stills', { recursive: true });
  let last = 0;
  for (const t of stillsArg.split(',').map(Number).sort((a, b) => a - b)) {
    await renderUpTo(t, last); last = t;
    writeFileSync(`motion/stills/t${String(t).replace('.', '_')}.png`, await shot());
    console.log('still', t);
  }
} else {
  const frames = Math.round(duration * FPS);
  const ff = spawn('ffmpeg', [
    '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-tune', 'animation',
    '-pix_fmt', 'yuv420p', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709',
    '-movflags', '+faststart', 'assets/actus-coach.mp4',
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  let poster = null;
  for (let f = 0; f < frames; f++) {
    const t = f / FPS;
    await page.evaluate((x) => window.render(x), t);
    const png = await shot();
    if (Math.abs(t - 3.6) < 0.5 / FPS) poster = png;   // the poster: live coaching, mid-sentence
    if (!ff.stdin.write(png)) await new Promise((r) => ff.stdin.once('drain', r));
    if (f % 150 === 0) console.log(`frame ${f}/${frames}`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  if (poster) {
    const p = spawn('ffmpeg', ['-y', '-f', 'png_pipe', '-i', '-', '-q:v', '3', 'assets/actus-coach-poster.jpg'], { stdio: ['pipe', 'inherit', 'inherit'] });
    p.stdin.end(poster);
    await new Promise((r) => p.on('close', r));
  }
}
await browser.close();
