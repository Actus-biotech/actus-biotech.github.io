/* @ds-bundle: {"format":3,"namespace":"ActusBiotechDesignSystem_e79e78","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ActivationRing","sourcePath":"components/data/ActivationRing.jsx"},{"name":"Metric","sourcePath":"components/data/Metric.jsx"},{"name":"SignalMeter","sourcePath":"components/data/SignalMeter.jsx"},{"name":"StatusDot","sourcePath":"components/data/StatusDot.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"803f515440b5","components/core/Badge.jsx":"ec4e57ea36e4","components/core/Button.jsx":"148fe5873e54","components/core/Card.jsx":"a0eacc7f70be","components/core/IconButton.jsx":"c24f8b7bd5af","components/data/ActivationRing.jsx":"5d8b69004c80","components/data/Metric.jsx":"382286a7f34b","components/data/SignalMeter.jsx":"f96a99be3be2","components/data/StatusDot.jsx":"70b945cf5fa6","components/forms/Input.jsx":"c590ddb509c1","components/forms/SegmentedControl.jsx":"4d543cb0ff2a","components/forms/Switch.jsx":"cf94097bccc7","tweaks-panel.jsx":"6591467622ed","ui_kits/mobile_app/AppShell.jsx":"717b85786d22","ui_kits/mobile_app/ExercisesScreen.jsx":"0650c410445d","ui_kits/mobile_app/HistoryScreen.jsx":"90aec750ea6f","ui_kits/mobile_app/InsightScreen.jsx":"57368d21ba94","ui_kits/mobile_app/LiveSessionScreen.jsx":"42cd284d4a0e","ui_kits/mobile_app/MuscleMapView.jsx":"37b9920397d4","ui_kits/mobile_app/SensorDetailSheet.jsx":"25f8b6ca0c97","ui_kits/mobile_app/SensorsScreen.jsx":"ef16575cfda2","ui_kits/mobile_app/SessionsScreen.jsx":"a94c2a1c7419","ui_kits/mobile_app/ios-frame.jsx":"be3343be4b51","ui_kits/mobile_app/kit-util.jsx":"05a3c5e4c32c","ui_kits/mobile_app/tweaks-panel.jsx":"6591467622ed","ui_kits/website/HomePage.jsx":"1e73ffcaf600","ui_kits/website/PricingPage.jsx":"6f911546d1c0","ui_kits/website/SiteChrome.jsx":"e7f73b75049b","ui_kits/website/site-util.jsx":"34f1d836b42e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ActusBiotechDesignSystem_e79e78 = window.ActusBiotechDesignSystem_e79e78 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-avatar{
  position:relative;display:inline-flex;align-items:center;justify-content:center;
  width:var(--_s,40px);height:var(--_s,40px);border-radius:var(--radius-circle);
  background:var(--surface-sunken);color:var(--text-body);
  font-family:var(--font-sans);font-weight:var(--weight-semibold);
  overflow:hidden;flex:0 0 auto;user-select:none;
  font-size:calc(var(--_s,40px) * 0.4);
}
.actus-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.actus-avatar--ring{box-shadow:0 0 0 2px var(--surface-card),0 0 0 4px var(--accent);}
.actus-avatar__status{
  position:absolute;right:-1px;bottom:-1px;width:30%;height:30%;min-width:8px;min-height:8px;
  border-radius:50%;border:2px solid var(--surface-card);
}
.actus-avatar__status--good{background:var(--good-500);}
.actus-avatar__status--fatigue{background:var(--fatigue-500);}
.actus-avatar__status--offline{background:var(--neutral-400);}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-avatar-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}
function Avatar({
  src,
  name = '',
  size = 40,
  ring = false,
  status,
  className = '',
  ...rest
}) {
  injectCSS();
  const cls = ['actus-avatar', ring ? 'actus-avatar--ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      ['--_s']: `${size}px`
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name), status && /*#__PURE__*/React.createElement("span", {
    className: `actus-avatar__status actus-avatar__status--${status}`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-badge{
  display:inline-flex;align-items:center;gap:var(--space-1);
  font-family:var(--font-sans);font-weight:var(--weight-semibold);
  font-size:var(--text-xs);letter-spacing:var(--tracking-wide);
  height:24px;padding:0 var(--space-3);border-radius:var(--radius-pill);
  border:1px solid transparent;white-space:nowrap;line-height:1;
}
.actus-badge--sm{height:20px;font-size:var(--text-2xs);padding:0 var(--space-2);}
.actus-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex:0 0 auto;}
.actus-badge--live .actus-badge__dot{animation:actus-pulse 1.4s var(--ease-in-out) infinite;box-shadow:0 0 6px currentColor;}

.actus-badge--neutral{background:var(--surface-sunken);color:var(--text-muted);border-color:var(--border-subtle);}
.actus-badge--signal{background:var(--accent-surface);color:var(--accent-text);}
.actus-badge--good{background:var(--state-good-surface);color:var(--good-600);}
.actus-badge--caution{background:var(--state-caution-surface);color:var(--caution-600);}
.actus-badge--fatigue{background:var(--state-fatigue-surface);color:var(--fatigue-600);}
.actus-badge--rest{background:var(--state-rest-surface);color:var(--rest-600);}
.actus-badge--solid{color:var(--text-on-accent);background:var(--accent);border-color:transparent;}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-badge-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  live = false,
  className = '',
  children,
  ...rest
}) {
  injectCSS();
  const cls = ['actus-badge', `actus-badge--${tone}`, size === 'sm' ? 'actus-badge--sm' : '', live ? 'actus-badge--live' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), (dot || live) && /*#__PURE__*/React.createElement("span", {
    className: "actus-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Actus — Button
 * Self-contained: injects its CSS once, styles via design-system tokens.
 */
const CSS = `
.actus-btn{
  --_h: var(--control-height-md);
  font-family: var(--font-sans);
  font-weight: var(--weight-semibold);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-snug);
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  height: var(--_h); padding: 0 var(--space-6);
  border-radius: var(--radius-pill);
  border: 1.5px solid transparent;
  cursor: pointer; white-space: nowrap; user-select: none;
  transition: background-color var(--dur-fast) var(--ease-standard),
              color var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard),
              transform var(--dur-fast) var(--ease-standard);
}
.actus-btn:active{ transform: translateY(0.5px) scale(0.99); }
.actus-btn:focus-visible{ outline: none; box-shadow: var(--focus-ring); }
.actus-btn[disabled]{ opacity: .45; cursor: not-allowed; pointer-events: none; }
.actus-btn svg{ width: 1.05em; height: 1.05em; display: block; }

.actus-btn--sm{ --_h: var(--control-height-sm); font-size: var(--text-xs); padding: 0 var(--space-4); }
.actus-btn--lg{ --_h: var(--control-height-lg); font-size: var(--text-md); padding: 0 var(--space-7); }
.actus-btn--full{ width: 100%; }

.actus-btn--primary{ background: var(--accent); color: var(--text-on-accent); }
.actus-btn--primary:hover{ background: var(--accent-hover); box-shadow: var(--glow-signal-sm); }

.actus-btn--secondary{ background: var(--surface-card); color: var(--text-strong); border-color: var(--border-strong); }
.actus-btn--secondary:hover{ background: var(--surface-hover); border-color: var(--text-faint); }

.actus-btn--ghost{ background: transparent; color: var(--text-body); }
.actus-btn--ghost:hover{ background: var(--surface-hover); color: var(--text-strong); }

.actus-btn--danger{ background: var(--state-fatigue); color: #fff; }
.actus-btn--danger:hover{ background: var(--fatigue-600); box-shadow: var(--glow-fatigue); }

.actus-btn__spin{ width:1em;height:1em;border-radius:50%;border:2px solid currentColor;border-top-color:transparent;animation:actus-btn-spin .6s linear infinite; }
@keyframes actus-btn-spin{ to{ transform: rotate(360deg);} }
`;
function injectCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('actus-button-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-button-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  loading = false,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  injectCSS();
  const cls = ['actus-btn', `actus-btn--${variant}`, size !== 'md' ? `actus-btn--${size}` : '', fullWidth ? 'actus-btn--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled || loading
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "actus-btn__spin",
    "aria-hidden": "true"
  }), !loading && leadingIcon, children, !loading && trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-card{
  background:var(--surface-card);
  border:1px solid var(--border-subtle);
  border-radius:var(--radius-xl);
  box-shadow:var(--elevation-card);
  padding:var(--space-6);
  color:var(--text-body);
}
.actus-card--flush{padding:0;overflow:hidden;}
.actus-card--raised{box-shadow:var(--elevation-pop);}
.actus-card--interactive{cursor:pointer;transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out);}
.actus-card--interactive:hover{transform:translateY(-2px);box-shadow:var(--elevation-pop);border-color:var(--border-default);}
.actus-card--accent{border-color:rgba(6,195,252,.4);box-shadow:var(--glow-signal-sm);}
.actus-card--glass{
  background:var(--surface-glass);
  -webkit-backdrop-filter:blur(var(--blur-lg)) saturate(160%);
  backdrop-filter:blur(var(--blur-lg)) saturate(160%);
  border-color:var(--border-subtle);
  box-shadow:var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.5);
}
[data-theme="dark"] .actus-card--glass{box-shadow:var(--shadow-dark-md), inset 0 1px 0 rgba(255,255,255,0.08);}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-card-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  raised = false,
  interactive = false,
  accent = false,
  flush = false,
  glass = false,
  className = '',
  children,
  ...rest
}) {
  injectCSS();
  const cls = ['actus-card', raised ? 'actus-card--raised' : '', interactive ? 'actus-card--interactive' : '', accent ? 'actus-card--accent' : '', flush ? 'actus-card--flush' : '', glass ? 'actus-card--glass' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-iconbtn{
  --_s: 44px;
  display:inline-flex;align-items:center;justify-content:center;
  width:var(--_s);height:var(--_s);
  border-radius:var(--radius-circle);
  border:1.5px solid transparent;cursor:pointer;
  color:var(--text-body);background:transparent;
  transition: background-color var(--dur-fast) var(--ease-standard),
              color var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard);
}
.actus-iconbtn:focus-visible{outline:none;box-shadow:var(--focus-ring);}
.actus-iconbtn[disabled]{opacity:.4;cursor:not-allowed;pointer-events:none;}
.actus-iconbtn svg{width:1.25rem;height:1.25rem;display:block;}
.actus-iconbtn--sm{--_s:36px;}
.actus-iconbtn--sm svg{width:1rem;height:1rem;}
.actus-iconbtn--lg{--_s:52px;}

.actus-iconbtn--ghost:hover{background:var(--surface-hover);color:var(--text-strong);}
.actus-iconbtn--soft{background:var(--accent-surface);color:var(--accent-text);}
.actus-iconbtn--soft:hover{box-shadow:var(--glow-signal-sm);}
.actus-iconbtn--solid{background:var(--accent);color:var(--text-on-accent);}
.actus-iconbtn--solid:hover{background:var(--accent-hover);box-shadow:var(--glow-signal-sm);}
.actus-iconbtn--outline{border-color:var(--border-strong);color:var(--text-body);}
.actus-iconbtn--outline:hover{border-color:var(--text-faint);background:var(--surface-hover);}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-iconbtn-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  injectCSS();
  const cls = ['actus-iconbtn', `actus-iconbtn--${variant}`, size !== 'md' ? `actus-iconbtn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/ActivationRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-ring{display:inline-grid;place-items:center;position:relative;font-family:var(--font-sans);}
.actus-ring svg{transform:rotate(-90deg);display:block;}
.actus-ring__bg{stroke:var(--surface-sunken);}
.actus-ring__fg{transition:stroke-dashoffset var(--dur-slow) var(--ease-out),stroke var(--dur-base) var(--ease-standard);stroke-linecap:round;}
.actus-ring__fg--signal{stroke:var(--signal-500);}
.actus-ring__fg--good{stroke:var(--good-500);}
.actus-ring__fg--caution{stroke:var(--caution-500);}
.actus-ring__fg--fatigue{stroke:var(--fatigue-500);}
.actus-ring__fg--rest{stroke:var(--rest-500);}
.actus-ring--glow .actus-ring__fg--signal{filter:drop-shadow(0 0 6px rgba(6,195,252,.6));}
.actus-ring__center{position:absolute;display:flex;flex-direction:column;align-items:center;line-height:1;}
.actus-ring__val{font-family:var(--font-mono);font-weight:var(--weight-semibold);color:var(--text-strong);font-variant-numeric:tabular-nums;}
.actus-ring__cap{font-size:var(--text-2xs);letter-spacing:var(--tracking-wide);text-transform:uppercase;color:var(--text-muted);margin-top:3px;}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-ring-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-ring-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function ActivationRing({
  value = 0,
  tone = 'signal',
  size = 96,
  thickness = 8,
  unit = '%',
  label,
  glow = false,
  showValue = true,
  className = '',
  ...rest
}) {
  injectCSS();
  const v = Math.max(0, Math.min(100, value));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - v / 100);
  const cls = ['actus-ring', glow ? 'actus-ring--glow' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      width: size,
      height: size
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement("circle", {
    className: "actus-ring__bg",
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    className: `actus-ring__fg actus-ring__fg--${tone}`,
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness,
    strokeDasharray: c,
    strokeDashoffset: off
  })), showValue && /*#__PURE__*/React.createElement("div", {
    className: "actus-ring__center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "actus-ring__val",
    style: {
      fontSize: size * 0.26
    }
  }, Math.round(v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.13
    }
  }, unit)), label && /*#__PURE__*/React.createElement("span", {
    className: "actus-ring__cap"
  }, label)));
}
Object.assign(__ds_scope, { ActivationRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ActivationRing.jsx", error: String((e && e.message) || e) }); }

// components/data/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-metric{display:flex;flex-direction:column;gap:var(--space-1);font-family:var(--font-sans);}
.actus-metric__cap{font-size:var(--text-xs);font-weight:var(--weight-semibold);letter-spacing:var(--tracking-wide);text-transform:uppercase;color:var(--text-muted);white-space:nowrap;}
.actus-metric__val{font-family:var(--font-mono);font-weight:var(--weight-semibold);color:var(--text-strong);font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-snug);line-height:1;display:flex;align-items:baseline;gap:4px;}
.actus-metric__unit{font-size:0.45em;color:var(--text-muted);font-weight:var(--weight-medium);}
.actus-metric--signal .actus-metric__val{color:var(--accent-text);}
.actus-metric--good .actus-metric__val{color:var(--good-600);}
.actus-metric--fatigue .actus-metric__val{color:var(--fatigue-600);}
.actus-metric__trend{display:inline-flex;align-items:center;gap:3px;font-size:var(--text-xs);font-weight:var(--weight-semibold);font-family:var(--font-sans);}
.actus-metric__trend--up{color:var(--good-600);}
.actus-metric__trend--down{color:var(--fatigue-600);}
.actus-metric__trend--flat{color:var(--text-muted);}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-metric-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-metric-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Metric({
  label,
  value,
  unit,
  tone = 'default',
  trend,
  trendDirection = 'flat',
  size = 36,
  className = '',
  ...rest
}) {
  injectCSS();
  const cls = ['actus-metric', tone !== 'default' ? `actus-metric--${tone}` : '', className].filter(Boolean).join(' ');
  const arrow = trendDirection === 'up' ? '▲' : trendDirection === 'down' ? '▼' : '—';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    className: "actus-metric__cap"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "actus-metric__val",
    style: {
      fontSize: size
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "actus-metric__unit"
  }, unit)), trend != null && /*#__PURE__*/React.createElement("span", {
    className: `actus-metric__trend actus-metric__trend--${trendDirection}`
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, arrow), trend));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Metric.jsx", error: String((e && e.message) || e) }); }

// components/data/SignalMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-meter{display:flex;flex-direction:column;gap:var(--space-2);font-family:var(--font-sans);width:100%;}
.actus-meter__head{display:flex;align-items:baseline;justify-content:space-between;gap:var(--space-3);}
.actus-meter__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-body);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:0 1 auto;}
.actus-meter__val{flex:0 0 auto;}
.actus-meter__val{font-family:var(--font-mono);font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-strong);font-variant-numeric:tabular-nums;}
.actus-meter__track{position:relative;height:10px;border-radius:var(--radius-pill);background:var(--surface-sunken);overflow:hidden;box-shadow:inset 0 0 0 1px var(--border-subtle);}
.actus-meter--lg .actus-meter__track{height:14px;}
.actus-meter__fill{position:absolute;inset:0 auto 0 0;border-radius:var(--radius-pill);transition:width var(--dur-slow) var(--ease-out),background-color var(--dur-base) var(--ease-standard);}
.actus-meter__fill--signal{background:var(--signal-500);}
.actus-meter__fill--good{background:var(--good-500);}
.actus-meter__fill--caution{background:var(--caution-500);}
.actus-meter__fill--fatigue{background:var(--fatigue-500);}
.actus-meter__fill--rest{background:var(--rest-500);}
.actus-meter--live .actus-meter__fill{animation:actus-pulse 1.6s var(--ease-in-out) infinite;}
.actus-meter--glow .actus-meter__fill--signal{box-shadow:var(--glow-signal-sm);}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-meter-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-meter-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function SignalMeter({
  value = 0,
  tone = 'signal',
  label,
  unit = '%',
  showValue = true,
  live = false,
  glow = false,
  size = 'md',
  className = '',
  ...rest
}) {
  injectCSS();
  const v = Math.max(0, Math.min(100, value));
  const cls = ['actus-meter', size === 'lg' ? 'actus-meter--lg' : '', live ? 'actus-meter--live' : '', glow ? 'actus-meter--glow' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "actus-meter__head"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "actus-meter__label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "actus-meter__val"
  }, Math.round(v), unit)), /*#__PURE__*/React.createElement("div", {
    className: "actus-meter__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: `actus-meter__fill actus-meter__fill--${tone}`,
    style: {
      width: `${v}%`
    }
  })));
}
Object.assign(__ds_scope, { SignalMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SignalMeter.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-status{display:inline-flex;align-items:center;gap:var(--space-2);font-family:var(--font-sans);font-size:var(--text-sm);color:var(--text-body);}
.actus-status__dot{width:9px;height:9px;border-radius:50%;flex:0 0 auto;position:relative;}
.actus-status__dot--signal{background:var(--signal-500);}
.actus-status__dot--good{background:var(--good-500);}
.actus-status__dot--caution{background:var(--caution-500);}
.actus-status__dot--fatigue{background:var(--fatigue-500);}
.actus-status__dot--rest{background:var(--rest-500);}
.actus-status__dot--offline{background:var(--neutral-400);}
.actus-status--pulse .actus-status__dot::after{
  content:"";position:absolute;inset:0;border-radius:50%;background:inherit;
  animation:actus-ping 1.6s var(--ease-out) infinite;
}
@keyframes actus-ping{0%{transform:scale(1);opacity:.55;}80%,100%{transform:scale(2.6);opacity:0;}}
.actus-status__label{font-weight:var(--weight-medium);color:var(--text-strong);white-space:nowrap;}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-status-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-status-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function StatusDot({
  tone = 'good',
  label,
  pulse = false,
  className = '',
  ...rest
}) {
  injectCSS();
  const cls = ['actus-status', pulse ? 'actus-status--pulse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: `actus-status__dot actus-status__dot--${tone}`
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "actus-status__label"
  }, label));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-field{display:flex;flex-direction:column;gap:var(--space-2);font-family:var(--font-sans);}
.actus-field__label{font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--text-strong);}
.actus-field__hint{font-size:var(--text-xs);color:var(--text-muted);}
.actus-field__hint--error{color:var(--fatigue-600);}
.actus-input{
  display:flex;align-items:center;gap:var(--space-3);
  height:var(--control-height-md);padding:0 var(--space-4);
  background:var(--surface-card);
  border:1.5px solid var(--border-default);border-radius:var(--radius-md);
  color:var(--text-strong);
  transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);
}
.actus-input:focus-within{border-color:var(--accent);box-shadow:var(--focus-ring);}
.actus-input--error{border-color:var(--fatigue-500);}
.actus-input--lg{height:var(--control-height-lg);}
.actus-input--sm{height:var(--control-height-sm);}
.actus-input input{
  flex:1;min-width:0;border:0;outline:0;background:transparent;
  font-family:var(--font-sans);font-size:var(--text-md);color:var(--text-strong);
}
.actus-input input::placeholder{color:var(--text-faint);}
.actus-input__icon{display:inline-flex;color:var(--text-muted);flex:0 0 auto;}
.actus-input__icon svg{width:1.1rem;height:1.1rem;}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-input-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  leadingIcon,
  trailingIcon,
  size = 'md',
  id,
  className = '',
  ...rest
}) {
  injectCSS();
  const fid = id || (label ? `actus-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const boxCls = ['actus-input', error ? 'actus-input--error' : '', size !== 'md' ? `actus-input--${size}` : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['actus-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "actus-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: boxCls
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "actus-input__icon"
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "actus-input__icon"
  }, trailingIcon)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `actus-field__hint${error ? ' actus-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-seg{
  display:inline-flex;align-self:flex-start;width:max-content;max-width:100%;padding:4px;gap:2px;
  background:var(--surface-sunken);border-radius:var(--radius-pill);
  border:1px solid var(--border-subtle);font-family:var(--font-sans);
}
.actus-seg__btn{
  appearance:none;border:0;cursor:pointer;background:transparent;
  display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);
  height:34px;padding:0 var(--space-5);border-radius:var(--radius-pill);
  font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--text-muted);
  transition:color var(--dur-fast) var(--ease-standard),background-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);
  white-space:nowrap;
}
.actus-seg__btn:hover{color:var(--text-strong);}
.actus-seg__btn--active{background:var(--surface-card);color:var(--text-strong);box-shadow:var(--shadow-xs);}
.actus-seg__btn svg{width:1rem;height:1rem;}
.actus-seg--sm .actus-seg__btn{height:28px;padding:0 var(--space-4);font-size:var(--text-xs);}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-seg-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-seg-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  className = '',
  ...rest
}) {
  injectCSS();
  const cls = ['actus-seg', size === 'sm' ? 'actus-seg--sm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "tablist"
  }, rest), options.map(opt => {
    const v = typeof opt === 'string' ? opt : opt.value;
    const label = typeof opt === 'string' ? opt : opt.label;
    const icon = typeof opt === 'string' ? null : opt.icon;
    const active = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: `actus-seg__btn${active ? ' actus-seg__btn--active' : ''}`,
      onClick: () => onChange && onChange(v)
    }, icon, label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.actus-switch{display:inline-flex;align-items:center;gap:var(--space-3);cursor:pointer;font-family:var(--font-sans);user-select:none;}
.actus-switch[aria-disabled="true"]{opacity:.45;cursor:not-allowed;}
.actus-switch__track{
  position:relative;width:46px;height:26px;border-radius:var(--radius-pill);
  background:var(--neutral-300);flex:0 0 auto;
  transition:background-color var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard);
}
.actus-switch__thumb{
  position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;
  background:#fff;box-shadow:var(--shadow-sm);
  transition:transform var(--dur-base) var(--ease-out);
}
.actus-switch--on .actus-switch__track{background:var(--accent);box-shadow:var(--glow-signal-sm);}
.actus-switch--on .actus-switch__thumb{transform:translateX(20px);}
.actus-switch--sm .actus-switch__track{width:38px;height:22px;}
.actus-switch--sm .actus-switch__thumb{width:16px;height:16px;}
.actus-switch--sm.actus-switch--on .actus-switch__thumb{transform:translateX(16px);}
.actus-switch__label{font-size:var(--text-sm);color:var(--text-strong);font-weight:var(--weight-medium);}
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('actus-switch-css')) return;
  const s = document.createElement('style');
  s.id = 'actus-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  checked = false,
  onChange,
  label,
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  injectCSS();
  const cls = ['actus-switch', checked ? 'actus-switch--on' : '', size === 'sm' ? 'actus-switch--sm' : '', className].filter(Boolean).join(' ');
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    role: "switch",
    "aria-checked": checked,
    "aria-disabled": disabled,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "actus-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "actus-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "actus-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/AppShell.jsx
try { (() => {
// AppShell — Actus mobile: 5-tab bar (Insight · Sensors · Sessions · Exercises · History)
function TabBar({
  tab,
  setTab
}) {
  const Icon = window.Icon;
  const items = [{
    id: 'sensors',
    label: 'Sensors',
    icon: 'radio'
  }, {
    id: 'sessions',
    label: 'Sessions',
    icon: 'dumbbell'
  }, {
    id: 'insight',
    label: 'Insight',
    icon: 'sparkles',
    center: true
  }, {
    id: 'exercises',
    label: 'Exercises',
    icon: 'search'
  }, {
    id: 'history',
    label: 'History',
    icon: 'chart-bar'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      background: 'var(--surface-glass)',
      WebkitBackdropFilter: 'blur(22px) saturate(180%)',
      backdropFilter: 'blur(22px) saturate(180%)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '10px 4px 26px',
      boxShadow: '0 -8px 30px rgba(20,18,40,0.06)'
    }
  }, items.map(it => {
    const active = tab === it.id;
    if (it.center) {
      return /*#__PURE__*/React.createElement("button", {
        key: it.id,
        onClick: () => setTab(it.id),
        style: {
          border: '3.5px solid var(--surface-card)',
          cursor: 'pointer',
          background: active ? 'var(--signal-500)' : 'var(--signal-600)',
          width: 56,
          height: 56,
          borderRadius: '50%',
          marginTop: -22,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          color: '#fff',
          boxShadow: active ? 'var(--glow-signal-md)' : 'var(--glow-signal-sm)',
          transition: 'all .2s',
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: it.icon,
        size: 22,
        strokeWidth: 2.4,
        color: "#fff"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '.01em',
          color: '#fff',
          lineHeight: 1
        }
      }, it.label));
    }
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => setTab(it.id),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        color: active ? 'var(--accent-text)' : 'var(--text-faint)',
        width: 58,
        padding: '4px 0'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 21,
      strokeWidth: active ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: active ? 700 : 500,
        letterSpacing: '.01em'
      }
    }, it.label));
  }));
}
function AppShell({
  tab,
  setTab,
  children,
  overlay
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      position: 'relative',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      paddingTop: 54,
      paddingBottom: 96
    }
  }, children), /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab
  }), overlay);
}
window.AppShell = AppShell;
window.TabBar = TabBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ExercisesScreen.jsx
try { (() => {
// ExercisesScreen — searchable exercise database with muscle map filter
function ExercisesScreen() {
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [muscleFilter, setMuscleFilter] = React.useState(null);
  const allExercises = [{
    id: 1,
    name: 'Back Squat',
    muscles: ['lquad', 'rquad', 'lham', 'rham', 'lglute', 'rglute'],
    category: 'Compound',
    equipment: 'Barbell'
  }, {
    id: 2,
    name: 'Romanian Deadlift',
    muscles: ['lham', 'rham', 'lglute', 'rglute', 'lower-back'],
    category: 'Compound',
    equipment: 'Barbell'
  }, {
    id: 3,
    name: 'Bench Press',
    muscles: ['chest', 'lshoulder', 'rshoulder'],
    category: 'Compound',
    equipment: 'Barbell'
  }, {
    id: 4,
    name: 'Pull-Up',
    muscles: ['llat', 'rlat', 'traps', 'lbicep', 'rbicep'],
    category: 'Compound',
    equipment: 'Bodyweight'
  }, {
    id: 5,
    name: 'Leg Press',
    muscles: ['lquad', 'rquad', 'lglute', 'rglute'],
    category: 'Compound',
    equipment: 'Machine'
  }, {
    id: 6,
    name: 'Standing Calf Raise',
    muscles: ['lcalf', 'rcalf'],
    category: 'Isolation',
    equipment: 'Machine'
  }, {
    id: 7,
    name: 'Plank',
    muscles: ['abs', 'lower-back'],
    category: 'Core',
    equipment: 'Bodyweight'
  }, {
    id: 8,
    name: 'Lateral Raise',
    muscles: ['lshoulder', 'rshoulder', 'traps'],
    category: 'Isolation',
    equipment: 'Dumbbells'
  }, {
    id: 9,
    name: 'Bicep Curl',
    muscles: ['lbicep', 'rbicep'],
    category: 'Isolation',
    equipment: 'Dumbbells'
  }, {
    id: 10,
    name: 'Hip Thrust',
    muscles: ['lglute', 'rglute', 'lham', 'rham'],
    category: 'Compound',
    equipment: 'Barbell'
  }, {
    id: 11,
    name: 'Bulgarian Split Squat',
    muscles: ['lquad', 'rquad', 'lglute', 'rglute'],
    category: 'Compound',
    equipment: 'Dumbbells'
  }, {
    id: 12,
    name: 'Overhead Press',
    muscles: ['lshoulder', 'rshoulder', 'traps'],
    category: 'Compound',
    equipment: 'Barbell'
  }, {
    id: 13,
    name: 'Cable Row',
    muscles: ['llat', 'rlat', 'traps', 'lbicep', 'rbicep'],
    category: 'Compound',
    equipment: 'Cable'
  }, {
    id: 14,
    name: 'Deadlift',
    muscles: ['lham', 'rham', 'lglute', 'rglute', 'lower-back', 'traps'],
    category: 'Compound',
    equipment: 'Barbell'
  }];
  const filtered = allExercises.filter(e => {
    const mS = e.name.toLowerCase().includes(search.toLowerCase());
    const mC = category === 'All' || e.category === category;
    const mM = !muscleFilter || e.muscles.includes(muscleFilter);
    return mS && mC && mM;
  });
  const mapMuscles = MUSCLE_DEFS.map(m => ({
    ...m,
    value: filtered.some(e => e.muscles.includes(m.id)) ? 65 : 0,
    tone: muscleFilter === m.id ? 'signal' : 'good'
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-.02em',
      marginBottom: 13
    }
  }, "Exercises"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: '9px 13px',
      marginBottom: 14,
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Search exercises\u2026",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      fontSize: 14,
      color: 'var(--text-strong)',
      outline: 'none'
    }
  }), search && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearch(''),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)',
      fontWeight: 600,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, "Filter by muscle"), muscleFilter && /*#__PURE__*/React.createElement("button", {
    onClick: () => setMuscleFilter(null),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--signal-600)',
      fontSize: 11.5,
      fontWeight: 700
    }
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(MuscleMapView, {
    gender: "female",
    muscles: mapMuscles,
    selected: muscleFilter,
    onSelect: id => setMuscleFilter(id === muscleFilter ? null : id),
    view: "both",
    height: 158
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      marginBottom: 13,
      flexWrap: 'wrap'
    }
  }, ['All', 'Compound', 'Isolation', 'Core'].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCategory(c),
    style: {
      border: '1px solid',
      cursor: 'pointer',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 12,
      fontWeight: 600,
      borderColor: category === c ? 'var(--signal-400)' : 'var(--border-default)',
      background: category === c ? 'var(--signal-100)' : 'transparent',
      color: category === c ? 'var(--signal-700)' : 'var(--text-muted)'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, filtered.length, " exercise", filtered.length !== 1 ? 's' : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)'
    }
  }, filtered.map((ex, i) => /*#__PURE__*/React.createElement("div", {
    key: ex.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--surface-card)',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--accent-text)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dumbbell",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, ex.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, ex.equipment, " \xB7 ", ex.muscles.length, " muscle groups")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-faint)"
  }))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 20px',
      textAlign: 'center',
      background: 'var(--surface-card)',
      color: 'var(--text-muted)',
      fontSize: 13.5
    }
  }, "No exercises match your search.")));
}
window.ExercisesScreen = ExercisesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ExercisesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/HistoryScreen.jsx
try { (() => {
// HistoryScreen — workout history with training load chart, EMG breakdown + muscle map
function HistoryScreen() {
  const {
    Card,
    Metric,
    SignalMeter,
    SegmentedControl
  } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];
  const [range, setRange] = React.useState('week');
  const [expanded, setExpanded] = React.useState(0);
  const sessions = [{
    id: 0,
    name: 'Lower Body · Strength',
    date: 'Today · 9:54 AM',
    duration: '42:10',
    balance: 96,
    peakLoad: 96,
    muscles: [{
      id: 'lquad',
      value: 88,
      tone: 'caution'
    }, {
      id: 'rquad',
      value: 92,
      tone: 'fatigue'
    }, {
      id: 'lham',
      value: 74,
      tone: 'good'
    }, {
      id: 'rham',
      value: 68,
      tone: 'good'
    }, {
      id: 'lcalf',
      value: 70,
      tone: 'good'
    }, {
      id: 'rcalf',
      value: 96,
      tone: 'fatigue'
    }, {
      id: 'lglute',
      value: 55,
      tone: 'good'
    }, {
      id: 'rglute',
      value: 60,
      tone: 'good'
    }]
  }, {
    id: 1,
    name: 'Sprint intervals',
    date: 'Yesterday · 7:45 AM',
    duration: '31:20',
    balance: 91,
    peakLoad: 88,
    muscles: [{
      id: 'lquad',
      value: 80,
      tone: 'caution'
    }, {
      id: 'rquad',
      value: 88,
      tone: 'caution'
    }, {
      id: 'lcalf',
      value: 76,
      tone: 'good'
    }, {
      id: 'rcalf',
      value: 84,
      tone: 'caution'
    }, {
      id: 'lglute',
      value: 60,
      tone: 'good'
    }, {
      id: 'rglute',
      value: 64,
      tone: 'good'
    }]
  }, {
    id: 2,
    name: 'Recovery flow',
    date: 'Mon · 7:00 AM',
    duration: '26:00',
    balance: 99,
    peakLoad: 42,
    muscles: [{
      id: 'abs',
      value: 35,
      tone: 'good'
    }, {
      id: 'lower-back',
      value: 28,
      tone: 'rest'
    }, {
      id: 'lshoulder',
      value: 22,
      tone: 'rest'
    }, {
      id: 'rshoulder',
      value: 24,
      tone: 'rest'
    }]
  }];
  const loadData = [{
    d: 'M',
    v: 26,
    tone: 'rest'
  }, {
    d: 'T',
    v: 0,
    tone: 'rest'
  }, {
    d: 'W',
    v: 88,
    tone: 'caution'
  }, {
    d: 'T',
    v: 91,
    tone: 'fatigue'
  }, {
    d: 'F',
    v: 0,
    tone: 'rest'
  }, {
    d: 'S',
    v: 0,
    tone: 'rest'
  }, {
    d: 'S',
    v: 0,
    tone: 'rest'
  }];
  const toneColor = {
    good: 'var(--good-500)',
    caution: 'var(--caution-500)',
    fatigue: 'var(--fatigue-500)',
    rest: 'var(--neutral-150)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-.02em'
    }
  }, "History"), /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    value: range,
    onChange: setRange,
    options: [{
      value: 'week',
      label: 'Week'
    }, {
      value: 'month',
      label: 'Month'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 17,
      marginBottom: 15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Training load"), /*#__PURE__*/React.createElement(Metric, {
    label: "",
    value: "358",
    unit: "lu",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 5,
      height: 90
    }
  }, loadData.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: '100%',
      maxWidth: 22,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${Math.max(b.v, 4)}%`,
      background: toneColor[b.tone],
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, b.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, sessions.map(s => {
    const isExp = expanded === s.id;
    const fullMuscles = MUSCLE_DEFS.map(md => ({
      ...md,
      ...(s.muscles.find(m => m.id === md.id) || {
        value: 0,
        tone: 'rest'
      })
    }));
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      style: {
        padding: 0,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setExpanded(isExp ? null : s.id),
      style: {
        width: '100%',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '13px 15px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--accent-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent-text)',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dumbbell",
      size: 17
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, s.date, " \xB7 ", s.duration)), /*#__PURE__*/React.createElement(Icon, {
      name: isExp ? 'chevron-up' : 'chevron-down',
      size: 16,
      color: "var(--text-faint)"
    })), isExp && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Metric, {
      label: "Balance",
      value: s.balance,
      unit: "%",
      tone: s.balance >= 95 ? 'good' : 'caution',
      size: 20
    }), /*#__PURE__*/React.createElement(Metric, {
      label: "Peak load",
      value: s.peakLoad,
      unit: "%",
      tone: s.peakLoad >= 90 ? 'fatigue' : 'caution',
      size: 20
    }), /*#__PURE__*/React.createElement(Metric, {
      label: "Duration",
      value: s.duration,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(MuscleMapView, {
      gender: "female",
      muscles: fullMuscles,
      view: "both",
      height: 185
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, s.muscles.sort((a, b) => b.value - a.value).map(m => /*#__PURE__*/React.createElement(SignalMeter, {
      key: m.id,
      label: MUSCLE_DEFS.find(md => md.id === m.id)?.name || m.id,
      value: m.value,
      tone: m.tone
    })))));
  })));
}
window.HistoryScreen = HistoryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/HistoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/InsightScreen.jsx
try { (() => {
// InsightScreen — home: readiness ring, AI insights, body map, AI coach chat
const MUSCLE_LABEL_TO_ID = {
  'R. Calf': 'rcalf',
  'L. Calf': 'lcalf',
  'R. Quad': 'rquad',
  'L. Quad': 'lquad',
  'R. Ham': 'rham',
  'L. Ham': 'lham'
};
function InsightScreen({
  tweaks = {}
}) {
  const {
    Card,
    ActivationRing,
    Badge,
    Avatar,
    Metric,
    SignalMeter
  } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];
  const [subTab, setSubTab] = React.useState('overview');
  const gender = 'female';
  const cautionId = MUSCLE_LABEL_TO_ID[tweaks.cautionMuscle] || 'rcalf';
  const fatigueId = MUSCLE_LABEL_TO_ID[tweaks.fatigueMuscle] || 'rquad';
  const readiness = tweaks.readiness !== undefined ? tweaks.readiness : 78;
  const baseValues = {
    lquad: 88,
    rquad: 92,
    lham: 72,
    rham: 68,
    lglute: 55,
    rglute: 60,
    lcalf: 70,
    rcalf: 91,
    abs: 44,
    chest: 28,
    lshoulder: 22,
    rshoulder: 24,
    traps: 30,
    llat: 32,
    rlat: 34
  };
  const weeklyMuscles = MUSCLE_DEFS.map(m => {
    const value = baseValues[m.id] || 10;
    const tone = m.id === fatigueId ? 'fatigue' : m.id === cautionId ? 'caution' : value > 50 ? 'good' : 'rest';
    return {
      ...m,
      value,
      tone
    };
  });
  const readinessLabel = readiness >= 80 ? 'Primed to train' : readiness >= 60 ? 'Ready to train' : 'Take it easy today';
  const readinessNote = readiness >= 80 ? 'Legs fully recovered. Strength block ahead.' : readiness >= 60 ? 'Mostly recovered. Moderate session advised.' : 'High accumulated load. Prioritise recovery.';
  const insights = [{
    tone: 'fatigue',
    icon: 'triangle-alert',
    title: 'Right side dominance',
    body: 'Right quad & calf are ~8% more active than left. Add unilateral work to correct imbalance.'
  }, {
    tone: 'caution',
    icon: 'activity',
    title: 'Calf recovery lag',
    body: 'Right calf has been elevated for 3 consecutive sessions. Consider 48 h rest before next leg day.'
  }, {
    tone: 'good',
    icon: 'sparkles',
    title: 'Quad symmetry improving',
    body: 'L/R quad balance improved 88 % → 96 % over 2 weeks. Your corrective work is paying off.'
  }];
  const bgMap = {
    good: 'var(--good-100)',
    caution: 'var(--caution-100)',
    fatigue: 'var(--fatigue-100)'
  };
  const colMap = {
    good: 'var(--good-600)',
    caution: 'var(--caution-600)',
    fatigue: 'var(--fatigue-600)'
  };
  const subTabs = [['overview', 'Overview'], ['body', 'Body Map'], ['coach', 'Coach']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Sat \xB7 Jun 14"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginTop: 5,
      letterSpacing: '-.02em'
    }
  }, "Good morning, Mara")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Mara Okonkwo",
    size: 42,
    ring: true,
    status: "good"
  })), /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark",
    style: {
      background: 'var(--ink-900)',
      borderRadius: 'var(--radius-xl)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -40,
      top: -40,
      width: 150,
      height: 150,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,120,232,0.22), transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(ActivationRing, {
    value: readiness,
    tone: "signal",
    glow: true,
    size: 88,
    thickness: 8,
    label: "Ready"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--signal-400)'
    }
  }, "Today's readiness"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 600,
      color: '#fff',
      marginTop: 6
    }
  }, readinessLabel), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--neutral-300)',
      marginTop: 4,
      lineHeight: 1.5,
      maxWidth: 148
    }
  }, readinessNote))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: 3,
      marginBottom: 16
    }
  }, subTabs.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setSubTab(id),
    style: {
      flex: 1,
      border: 'none',
      cursor: 'pointer',
      padding: '7px 0',
      borderRadius: 'calc(var(--radius-md) - 2px)',
      background: subTab === id ? 'var(--surface-card)' : 'transparent',
      color: subTab === id ? 'var(--text-strong)' : 'var(--text-muted)',
      fontWeight: subTab === id ? 700 : 500,
      fontSize: 12.5,
      boxShadow: subTab === id ? 'var(--shadow-sm)' : 'none',
      transition: 'all .2s'
    }
  }, label))), subTab === 'overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, insights.map((ins, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 14px',
      borderRadius: 'var(--radius-lg)',
      background: bgMap[ins.tone],
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: colMap[ins.tone],
      marginTop: 1,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ins.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-800)',
      marginBottom: 3
    }
  }, ins.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-700)',
      lineHeight: 1.5
    }
  }, ins.body)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Profile"), /*#__PURE__*/React.createElement(Badge, {
    tone: "signal"
  }, "Pro")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Height",
    value: "171",
    unit: "cm",
    size: 20
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Weight",
    value: "63",
    unit: "kg",
    size: 20
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Goal",
    value: "Power",
    size: 13
  })))), subTab === 'body' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, "Weekly training load")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(MuscleMapView, {
    gender: gender,
    muscles: weeklyMuscles,
    view: "both",
    height: 270
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, [['good-500', 'Optimal'], ['caution-500', 'Elevated'], ['fatigue-500', 'Overloaded'], ['neutral-300', 'Under-trained']].map(([c, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: `var(--${c})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, l))))), subTab === 'coach' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--signal-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--signal-600)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)',
      padding: '11px 13px',
      flex: 1,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-body)',
      lineHeight: 1.55
    }
  }, "Good morning Mara! Based on your EMG data this week, I recommend prioritizing ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "unilateral leg work"), " today \u2014 right calf fatigue suggests left-side compensation. A Bulgarian split squat session would help."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--text-muted)',
      marginTop: 7
    }
  }, "Actus Coach \xB7 7:42 AM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--signal-500)',
      borderRadius: 'var(--radius-lg) 0 var(--radius-lg) var(--radius-lg)',
      padding: '11px 13px',
      maxWidth: '78%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: '#fff',
      lineHeight: 1.5
    }
  }, "What weight should I use for the split squat?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--signal-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--signal-600)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)',
      padding: '11px 13px',
      flex: 1,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-body)',
      lineHeight: 1.55
    }
  }, "Start at ~50 kg (50% squat max), 3\xD710 each side. If L/R EMG imbalance stays under 5%, progress +5 kg next session."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--text-muted)',
      marginTop: 7
    }
  }, "Actus Coach \xB7 7:44 AM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '9px 13px',
      border: '1px solid var(--border-subtle)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ask your coach\u2026",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      fontSize: 13.5,
      color: 'var(--text-strong)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--signal-500)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 14,
    color: "#fff"
  })))));
}
window.InsightScreen = InsightScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/InsightScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/LiveSessionScreen.jsx
try { (() => {
// LiveSessionScreen — full-screen dark focus: exercise list + real-time EMG + muscle map toggle
function LiveSessionScreen({
  session,
  onEnd,
  tweaks = {}
}) {
  const {
    SignalMeter,
    Metric,
    Badge,
    IconButton,
    Button
  } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];
  const [mapMode, setMapMode] = React.useState(false);
  const [selectedMuscle, setSelectedMuscle] = React.useState('rcalf');
  const [elapsed, setElapsed] = React.useState(0);
  const LABEL_TO_ID = {
    'R. Calf': 'rcalf',
    'L. Calf': 'lcalf',
    'R. Quad': 'rquad',
    'L. Quad': 'lquad',
    'R. Ham': 'rham',
    'L. Ham': 'lham'
  };
  const fatigueId = LABEL_TO_ID[tweaks.fatigueMuscle] || 'rquad';
  const cautionId = LABEL_TO_ID[tweaks.cautionMuscle] || 'rcalf';
  const fatigueDef = MUSCLE_DEFS.find(m => m.id === fatigueId);
  const fatigueName = fatigueDef?.name || 'R. Quad';
  React.useEffect(() => {
    const t = setInterval(() => setElapsed(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const exercises = session?.exercises || [{
    name: 'Back Squat',
    sets: 4,
    reps: '5',
    currentSet: 2,
    status: 'active'
  }, {
    name: 'Romanian Deadlift',
    sets: 3,
    reps: '8',
    currentSet: 0,
    status: 'pending'
  }, {
    name: 'Leg Press',
    sets: 3,
    reps: '12',
    currentSet: 0,
    status: 'pending'
  }, {
    name: 'Calf Raise',
    sets: 3,
    reps: '15',
    currentSet: 0,
    status: 'pending'
  }];
  const liveData = {
    lquad: 72,
    rquad: 88,
    lham: 54,
    rham: 48,
    lglute: 40,
    rglute: 44,
    lcalf: 66,
    rcalf: 94
  };
  const liveMuscles = MUSCLE_DEFS.map(m => {
    const value = liveData[m.id] || 10;
    const tone = m.id === fatigueId ? 'fatigue' : m.id === cautionId ? 'caution' : value > 40 ? 'good' : 'rest';
    return {
      ...m,
      value,
      tone
    };
  });
  const activeMuscles = liveMuscles.filter(m => (m.value || 0) > 40).sort((a, b) => b.value - a.value).slice(0, 5);
  const sel = liveMuscles.find(m => m.id === selectedMuscle);
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark",
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ink-950)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '60px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "signal",
    live: true
  }, "LIVE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 24,
      fontWeight: 600,
      color: '#fff',
      letterSpacing: '-.02em'
    }
  }, fmt(elapsed))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMapMode(m => !m),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '5px 11px',
      borderRadius: 'var(--radius-sm)',
      background: mapMode ? 'var(--signal-600)' : 'var(--ink-700)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mapMode ? 'list' : 'scan',
    size: 14,
    color: "#fff"
  }), mapMode ? 'Exercises' : 'Map'), /*#__PURE__*/React.createElement(IconButton, {
    label: "Pause",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pause",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--signal-400)',
      marginBottom: 14
    }
  }, session?.name || 'Lower Body · Strength'), mapMode && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 12,
      background: 'var(--ink-850)',
      borderRadius: 'var(--radius-lg)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(MuscleMapView, {
    gender: "female",
    muscles: liveMuscles,
    selected: selectedMuscle,
    onSelect: setSelectedMuscle,
    view: "both",
    height: 230,
    style: {
      background: '#F8F7FF'
    }
  })), sel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: sel.name,
    value: sel.value,
    unit: "%",
    tone: sel.tone === 'fatigue' ? 'fatigue' : 'signal',
    size: 34
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Composite",
    value: "74",
    unit: "%",
    size: 34
  }))), !mapMode && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--neutral-500)',
      marginBottom: 8
    }
  }, "Exercises"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, exercises.map((ex, i) => {
    const active = ex.status === 'active';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '12px 13px',
        borderRadius: 'var(--radius-md)',
        background: active ? 'var(--ink-700)' : 'var(--ink-850)',
        border: `1px solid ${active ? 'var(--signal-600)' : 'transparent'}`,
        transition: 'all .2s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 'var(--radius-xs)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: active ? 'var(--signal-500)' : 'var(--ink-600)',
        fontSize: 11,
        fontWeight: 700,
        color: active ? '#fff' : 'var(--neutral-500)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: active ? 700 : 500,
        color: active ? '#fff' : 'var(--neutral-500)'
      }
    }, ex.name), active && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--signal-400)',
        marginTop: 2,
        fontFamily: 'var(--font-mono)'
      }
    }, "Set ", ex.currentSet, " of ", ex.sets, " \xB7 ", ex.reps, " reps")), !active && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: 'var(--neutral-600)',
        fontFamily: 'var(--font-mono)'
      }
    }, ex.sets, "\xD7", ex.reps));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      padding: '11px 13px',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(229,120,126,0.13)',
      border: '1px solid rgba(229,120,126,0.35)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fatigue-400)',
      marginTop: 1,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "triangle-alert",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#fff'
    }
  }, fatigueName, " approaching fatigue"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--neutral-400)',
      marginTop: 2
    }
  }, "Ease off or switch to left side."))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--neutral-500)',
      marginBottom: 9
    }
  }, "Active sensors"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, activeMuscles.map(m => /*#__PURE__*/React.createElement(SignalMeter, {
    key: m.id,
    label: m.name,
    value: m.value,
    tone: m.tone,
    live: m.tone === 'fatigue'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: '11px 20px 28px',
      background: 'var(--ink-900)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    fullWidth: true,
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "square",
      size: 15
    }),
    onClick: onEnd
  }, "End session")));
}
window.LiveSessionScreen = LiveSessionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/LiveSessionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/MuscleMapView.jsx
try { (() => {
// MuscleMapView — anatomy images with colored muscle overlays (mix-blend-mode: color)
// Each activated muscle is colored by an elliptical overlay that tints the anatomical region.

const MALE_IMG = '../../assets/muscle-map-male.jpg';
const FEMALE_IMG = '../../assets/muscle-map-female.jpg';
const MAP_TONE_COLOR = {
  good: 'var(--good-500)',
  caution: 'var(--caution-500)',
  fatigue: 'var(--fatigue-500)',
  rest: 'var(--rest-400)',
  signal: 'var(--signal-500)'
};

// x, y = center % of full square image; w, h = size % of full image
// Front figure: x ≈ 0–50   Back figure: x ≈ 50–100
const MUSCLE_DEFS = [{
  id: 'chest',
  name: 'Chest',
  mapView: 'front',
  x: 25,
  y: 30,
  w: 16,
  h: 10
}, {
  id: 'lshoulder',
  name: 'L. Shoulder',
  mapView: 'front',
  x: 17,
  y: 24,
  w: 9,
  h: 8
}, {
  id: 'rshoulder',
  name: 'R. Shoulder',
  mapView: 'front',
  x: 33,
  y: 24,
  w: 9,
  h: 8
}, {
  id: 'lbicep',
  name: 'L. Bicep',
  mapView: 'front',
  x: 13,
  y: 41,
  w: 5,
  h: 12
}, {
  id: 'rbicep',
  name: 'R. Bicep',
  mapView: 'front',
  x: 37,
  y: 41,
  w: 5,
  h: 12
}, {
  id: 'abs',
  name: 'Abs',
  mapView: 'front',
  x: 25,
  y: 50,
  w: 10,
  h: 14
}, {
  id: 'lquad',
  name: 'L. Quad',
  mapView: 'front',
  x: 20,
  y: 65,
  w: 8,
  h: 20
}, {
  id: 'rquad',
  name: 'R. Quad',
  mapView: 'front',
  x: 30,
  y: 65,
  w: 8,
  h: 20
}, {
  id: 'lcalf',
  name: 'L. Calf',
  mapView: 'front',
  x: 20,
  y: 83,
  w: 5,
  h: 12
}, {
  id: 'rcalf',
  name: 'R. Calf',
  mapView: 'front',
  x: 30,
  y: 83,
  w: 5,
  h: 12
}, {
  id: 'traps',
  name: 'Traps',
  mapView: 'back',
  x: 75,
  y: 22,
  w: 16,
  h: 6
}, {
  id: 'llat',
  name: 'L. Lat',
  mapView: 'back',
  x: 68,
  y: 35,
  w: 8,
  h: 16
}, {
  id: 'rlat',
  name: 'R. Lat',
  mapView: 'back',
  x: 82,
  y: 35,
  w: 8,
  h: 16
}, {
  id: 'lower-back',
  name: 'Lower Back',
  mapView: 'back',
  x: 75,
  y: 44,
  w: 12,
  h: 8
}, {
  id: 'lglute',
  name: 'L. Glute',
  mapView: 'back',
  x: 69,
  y: 54,
  w: 10,
  h: 12
}, {
  id: 'rglute',
  name: 'R. Glute',
  mapView: 'back',
  x: 81,
  y: 54,
  w: 10,
  h: 12
}, {
  id: 'lham',
  name: 'L. Hamstring',
  mapView: 'back',
  x: 70,
  y: 65,
  w: 7,
  h: 18
}, {
  id: 'rham',
  name: 'R. Hamstring',
  mapView: 'back',
  x: 80,
  y: 65,
  w: 7,
  h: 18
}];
function MuscleMapView({
  gender = 'male',
  muscles = [],
  selected,
  onSelect,
  view = 'both',
  height = 220,
  style = {}
}) {
  const img = gender === 'female' ? FEMALE_IMG : MALE_IMG;
  const containerW = view === 'both' ? height : height * 0.5;
  // Blur scales with container size so thumbnails stay crisp
  const blur = Math.max(2, Math.round(height * 0.024));
  const imgStyle = view === 'back' ? {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '200%',
    height: '100%',
    objectFit: 'fill'
  } : view === 'front' ? {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '200%',
    height: '100%',
    objectFit: 'fill'
  } : {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'fill'
  };

  // Convert full-image % → container %
  const toX = mx => view === 'both' ? mx : view === 'front' ? mx * 2 : (mx - 50) * 2;
  const toW = mw => view === 'both' ? mw : mw * 2;
  const visible = view === 'both' ? muscles : muscles.filter(m => m.mapView === view);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: containerW,
      height,
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      background: '#FAFAFE',
      flexShrink: 0,
      isolation: 'isolate',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "Muscle anatomy",
    draggable: false,
    style: imgStyle
  }), visible.map(m => {
    const val = m.value || 0;
    const active = val > 15;
    const isSel = selected === m.id;
    const col = MAP_TONE_COLOR[m.tone] || 'var(--signal-400)';
    const cx = toX(m.x);
    const sw = toW(m.w || 8);
    const sh = m.h || 10;
    // Opacity reflects activation intensity; selected = always full
    const opacity = isSel ? active ? 0.97 : 0.55 : active ? 0.52 + 0.43 * (val / 100) : 0;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: m.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: `${cx}%`,
        top: `${m.y}%`,
        transform: 'translate(-50%,-50%)',
        width: `${sw}%`,
        height: `${sh}%`,
        borderRadius: '50%',
        background: active || isSel ? col : 'transparent',
        opacity,
        filter: `blur(${blur}px)`,
        mixBlendMode: 'color',
        pointerEvents: 'none',
        transition: 'opacity .35s ease, background .35s ease'
      }
    }), isSel && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: `${cx}%`,
        top: `${m.y}%`,
        transform: 'translate(-50%,-50%)',
        width: `${sw + 2}%`,
        height: `${sh + 2}%`,
        borderRadius: '50%',
        border: '2px solid rgba(255,255,255,0.92)',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.18)',
        pointerEvents: 'none',
        zIndex: 6
      }
    }), /*#__PURE__*/React.createElement("button", {
      title: m.name,
      onClick: () => onSelect && onSelect(m.id),
      style: {
        position: 'absolute',
        left: `${cx}%`,
        top: `${m.y}%`,
        transform: 'translate(-50%,-50%)',
        width: `${Math.max(sw, 9)}%`,
        height: `${Math.max(sh, 9)}%`,
        borderRadius: '50%',
        background: 'transparent',
        border: 'none',
        cursor: onSelect ? 'pointer' : 'default',
        padding: 0,
        outline: 'none',
        zIndex: 5
      }
    }));
  }));
}
window.MuscleMapView = MuscleMapView;
window.MUSCLE_DEFS = MUSCLE_DEFS;
window.MAP_TONE_COLOR = MAP_TONE_COLOR;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/MuscleMapView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/SensorDetailSheet.jsx
try { (() => {
// SensorDetailSheet — slide-up bottom sheet with live animated EMG waveform
// Renders via AppShell overlay slot, covers full screen including tab bar.

function SensorDetailSheet({
  sensor,
  onClose
}) {
  const Icon = window.Icon;
  const WAVE_COLOR = {
    good: '#5CB68A',
    caution: '#E2B05C',
    fatigue: '#E5787E',
    offline: '#3B3A4C',
    signal: '#8878E8'
  };
  const isOffline = sensor.status === 'offline';
  const baseLevel = isOffline ? 0 : sensor.status === 'caution' ? 20 : 32;
  const waveColor = isOffline ? WAVE_COLOR.offline : sensor.status === 'caution' ? WAVE_COLOR.caution : WAVE_COLOR.signal;
  const POINTS = 120;
  const [wave, setWave] = React.useState(() => Array(POINTS).fill(0));
  React.useEffect(() => {
    if (isOffline) return;
    const t = setInterval(() => {
      setWave(prev => {
        const next = [...prev.slice(1)];
        const burst = Math.random() > 0.72 ? Math.random() * baseLevel * 3.2 : 0;
        const noise = (Math.random() - 0.5) * 14;
        next.push(Math.max(0, Math.min(100, baseLevel + burst + noise)));
        return next;
      });
    }, 30);
    return () => clearInterval(t);
  }, [isOffline, baseLevel]);
  const current = Math.round(wave[wave.length - 1] || 0);
  const avg = Math.round(wave.reduce((a, b) => a + b, 0) / POINTS);
  const W = 300,
    H = 88;
  const pathD = wave.map((v, i) => {
    const x = i / (POINTS - 1) * W;
    const y = H - v / 100 * H;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // Gradient area fill under waveform
  const areaD = pathD + ` L${W},${H} L0,${H} Z`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(8,8,14,0.52)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark",
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'var(--ink-900)',
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
      padding: '14px 20px 42px',
      border: '1px solid var(--border-default)',
      borderBottom: 'none',
      boxShadow: '0 -24px 64px rgba(8,8,14,0.55)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 4,
      borderRadius: 2,
      background: 'var(--ink-600)',
      margin: '0 auto 15px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: '#fff',
      fontFamily: 'var(--font-display)',
      letterSpacing: '-.01em'
    }
  }, sensor.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--neutral-500)',
      fontFamily: 'var(--font-mono)',
      marginTop: 3
    }
  }, sensor.id, " \xB7 ", sensor.signal)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, !isOffline && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 10,
      color: waveColor,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      letterSpacing: '.1em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: waveColor,
      boxShadow: `0 0 6px ${waveColor}`,
      animation: 'actus-pulse 1s ease-in-out infinite'
    }
  }), "LIVE"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--ink-700)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--neutral-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 15
  })))), isOffline ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-850)',
      borderRadius: 'var(--radius-md)',
      padding: '28px 20px',
      textAlign: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--neutral-600)',
      marginBottom: 8,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wifi-off",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--neutral-600)'
    }
  }, "Sensor offline \u2014 no signal")) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-950)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 10px 6px',
      marginBottom: 14,
      border: '1px solid rgba(136,120,232,0.14)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: `0 0 ${W} ${H}`,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "emg-fill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: waveColor,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: waveColor,
    stopOpacity: "0"
  }))), [25, 50, 75].map(pct => /*#__PURE__*/React.createElement("line", {
    key: pct,
    x1: "0",
    y1: H * (1 - pct / 100),
    x2: W,
    y2: H * (1 - pct / 100),
    stroke: "rgba(255,255,255,0.04)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: areaD,
    fill: "url(#emg-fill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: pathD,
    fill: "none",
    stroke: waveColor,
    strokeWidth: "1.8",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 9
    }
  }, [{
    label: 'Now',
    value: isOffline ? '—' : `${current}%`,
    color: waveColor
  }, {
    label: 'Avg',
    value: isOffline ? '—' : `${avg}%`,
    color: '#fff'
  }, {
    label: 'Battery',
    value: sensor.battery > 0 ? `${sensor.battery}%` : '—',
    color: 'var(--neutral-400)'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      fontWeight: 700,
      color: s.color
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--neutral-600)',
      marginTop: 3
    }
  }, s.label))))));
}
window.SensorDetailSheet = SensorDetailSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/SensorDetailSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/SensorsScreen.jsx
try { (() => {
// SensorsScreen — hub status, sensor placement muscle map, paired sensor list
function SensorsScreen({
  onSensorDetail
}) {
  const {
    Card,
    StatusDot,
    Switch,
    Badge
  } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];
  const [haptics, setHaptics] = React.useState(true);
  const [selectedId, setSelectedId] = React.useState(null);
  const sensors = [{
    name: 'L. Quad',
    id: 'S-01',
    battery: 88,
    signal: 'Strong',
    status: 'good',
    muscleId: 'lquad'
  }, {
    name: 'R. Quad',
    id: 'S-02',
    battery: 76,
    signal: 'Strong',
    status: 'good',
    muscleId: 'rquad'
  }, {
    name: 'L. Hamstring',
    id: 'S-03',
    battery: 64,
    signal: 'Strong',
    status: 'good',
    muscleId: 'lham'
  }, {
    name: 'R. Hamstring',
    id: 'S-04',
    battery: 91,
    signal: 'Strong',
    status: 'good',
    muscleId: 'rham'
  }, {
    name: 'Core',
    id: 'S-05',
    battery: 52,
    signal: 'Fair',
    status: 'caution',
    muscleId: 'abs'
  }, {
    name: 'R. Calf',
    id: 'S-06',
    battery: 0,
    signal: 'Offline',
    status: 'offline',
    muscleId: 'rcalf'
  }];
  const mapMuscles = MUSCLE_DEFS.map(m => {
    const s = sensors.find(s => s.muscleId === m.id);
    if (!s) return {
      ...m,
      value: 0,
      tone: 'rest'
    };
    const tone = s.status === 'caution' ? 'caution' : s.status === 'offline' ? 'rest' : 'signal';
    return {
      ...m,
      value: s.status !== 'offline' ? 72 : 0,
      tone
    };
  });
  const selSensor = sensors.find(s => s.muscleId === selectedId);
  const handleSelect = muscleId => {
    const sensor = sensors.find(s => s.muscleId === muscleId);
    setSelectedId(muscleId);
    if (sensor && onSensorDetail) onSensorDetail(sensor);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-.02em',
      marginBottom: 16
    }
  }, "Sensors"), /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark",
    style: {
      background: 'var(--ink-900)',
      borderRadius: 'var(--radius-xl)',
      padding: 18,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -30,
      top: -30,
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,120,232,0.20), transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--ink-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--signal-400)',
      boxShadow: 'var(--glow-signal-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "router",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: '#fff'
    }
  }, "Actus Hub"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    tone: "signal",
    label: "Connected \xB7 5 of 6 live",
    pulse: true
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: 'var(--neutral-300)',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "battery-medium",
    size: 14
  }), " 82%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)',
      fontWeight: 600,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Sensor placement"), selSensor && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--signal-600)',
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: 0,
      fontSize: 12
    }
  }, "\u2014 ", selSensor.name, " \xB7 ", selSensor.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(MuscleMapView, {
    gender: "female",
    muscles: mapMuscles,
    selected: selectedId,
    onSelect: handleSelect,
    view: "both",
    height: 210
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 14,
      padding: '12px 15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent-text)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "vibrate",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Haptic fatigue alerts")), /*#__PURE__*/React.createElement(Switch, {
    checked: haptics,
    onChange: setHaptics
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      margin: '20px 2px 10px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Paired sensors"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--accent-text)',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), " Pair new")), /*#__PURE__*/React.createElement(Card, {
    flush: true,
    style: {
      overflow: 'hidden'
    }
  }, sensors.map((s, i) => {
    const isSel = selectedId === s.muscleId;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => handleSelect(s.muscleId),
      style: {
        width: '100%',
        border: 'none',
        background: isSel ? 'var(--signal-100)' : 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 15px',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none',
        textAlign: 'left',
        transition: 'background .15s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: s.status === 'offline' ? 'var(--surface-sunken)' : isSel ? 'var(--signal-200)' : 'var(--accent-surface)',
        color: s.status === 'offline' ? 'var(--text-faint)' : isSel ? 'var(--signal-600)' : 'var(--accent-text)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-dot",
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        marginTop: 2
      }
    }, s.id, " \xB7 ", s.signal)), s.status === 'offline' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm"
    }, "Offline") : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        display: 'flex',
        alignItems: 'center',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.battery > 60 ? 'battery-full' : 'battery-low',
      size: 13
    }), " ", s.battery, "%"));
  })));
}
window.SensorsScreen = SensorsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/SensorsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/SessionsScreen.jsx
try { (() => {
// SessionsScreen — Actus plan templates + custom templates + session detail view
function SessionDetail({
  session,
  onBack,
  onStart
}) {
  const {
    Button,
    Badge
  } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];
  const muscles = MUSCLE_DEFS.map(m => ({
    ...m,
    value: session.muscles.includes(m.id) ? 72 : 0,
    tone: session.muscles.includes(m.id) ? 'signal' : 'rest'
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      color: 'var(--accent-text)',
      fontWeight: 600,
      fontSize: 14,
      padding: '0 0 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 18
  }), " All sessions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-.02em',
      flex: 1,
      paddingRight: 10
    }
  }, session.name), session.author !== 'Actus' && /*#__PURE__*/React.createElement(Badge, {
    tone: "signal"
  }, session.author)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 16,
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), session.duration), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 13
  }), session.exercises.length, " exercises")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(MuscleMapView, {
    gender: "female",
    muscles: muscles,
    view: "both",
    height: 210
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Exercises"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      marginBottom: 20
    }
  }, session.exercises.map((ex, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--surface-card)',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--surface-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, ex.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, ex.sets, "\xD7", ex.reps)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    }),
    onClick: () => onStart(session)
  }, "Start session"));
}
function SessionsScreen({
  onStart
}) {
  const {
    Card
  } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];
  const [subTab, setSubTab] = React.useState('actus');
  const [selected, setSelected] = React.useState(null);
  const actusTemplates = [{
    id: 1,
    name: 'Lower Body · Strength',
    author: 'Actus',
    duration: '45–55 min',
    muscles: ['lquad', 'rquad', 'lham', 'rham', 'lglute', 'rglute', 'lcalf', 'rcalf'],
    exercises: [{
      name: 'Back Squat',
      sets: 4,
      reps: '5'
    }, {
      name: 'Romanian Deadlift',
      sets: 3,
      reps: '8'
    }, {
      name: 'Leg Press',
      sets: 3,
      reps: '12'
    }, {
      name: 'Calf Raise',
      sets: 3,
      reps: '15'
    }]
  }, {
    id: 2,
    name: 'Push Day',
    author: 'Actus',
    duration: '40–50 min',
    muscles: ['chest', 'lshoulder', 'rshoulder', 'lbicep', 'rbicep'],
    exercises: [{
      name: 'Bench Press',
      sets: 4,
      reps: '6'
    }, {
      name: 'Overhead Press',
      sets: 3,
      reps: '8'
    }, {
      name: 'Lateral Raise',
      sets: 3,
      reps: '12'
    }, {
      name: 'Tricep Pushdown',
      sets: 3,
      reps: '12'
    }]
  }, {
    id: 3,
    name: 'Pull Day',
    author: 'Actus',
    duration: '40–50 min',
    muscles: ['llat', 'rlat', 'traps', 'lbicep', 'rbicep'],
    exercises: [{
      name: 'Pull-Up',
      sets: 4,
      reps: '6'
    }, {
      name: 'Cable Row',
      sets: 3,
      reps: '10'
    }, {
      name: 'Face Pull',
      sets: 3,
      reps: '15'
    }, {
      name: 'Bicep Curl',
      sets: 3,
      reps: '12'
    }]
  }, {
    id: 4,
    name: 'Full Body · Power',
    author: 'Actus',
    duration: '55–65 min',
    muscles: ['lham', 'rham', 'lglute', 'rglute', 'chest', 'llat', 'rlat', 'abs'],
    exercises: [{
      name: 'Deadlift',
      sets: 4,
      reps: '4'
    }, {
      name: 'Bench Press',
      sets: 3,
      reps: '6'
    }, {
      name: 'Pull-Up',
      sets: 3,
      reps: '6'
    }, {
      name: 'Box Jump',
      sets: 3,
      reps: '5'
    }, {
      name: 'Plank',
      sets: 3,
      reps: '60 s'
    }]
  }];
  const myTemplates = [{
    id: 5,
    name: 'Sprint & Power',
    author: 'Mara',
    duration: '30–40 min',
    muscles: ['lquad', 'rquad', 'lglute', 'rglute', 'abs', 'lcalf', 'rcalf'],
    exercises: [{
      name: 'Box Jump',
      sets: 4,
      reps: '5'
    }, {
      name: 'Sprint 40 m',
      sets: 6,
      reps: '×1'
    }, {
      name: 'Hip Thrust',
      sets: 3,
      reps: '10'
    }, {
      name: 'Plank',
      sets: 3,
      reps: '45 s'
    }]
  }];
  const templates = subTab === 'actus' ? actusTemplates : myTemplates;
  if (selected) return /*#__PURE__*/React.createElement(SessionDetail, {
    session: selected,
    onBack: () => setSelected(null),
    onStart: onStart
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-.02em'
    }
  }, "Sessions"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--signal-100)',
      border: '1px solid var(--signal-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--signal-600)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 19
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: 3,
      marginBottom: 18
    }
  }, [['actus', 'Actus Plans'], ['mine', 'My Templates']].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setSubTab(id),
    style: {
      flex: 1,
      border: 'none',
      cursor: 'pointer',
      padding: '7px 0',
      borderRadius: 'calc(var(--radius-md) - 2px)',
      background: subTab === id ? 'var(--surface-card)' : 'transparent',
      color: subTab === id ? 'var(--text-strong)' : 'var(--text-muted)',
      fontWeight: subTab === id ? 700 : 500,
      fontSize: 13,
      boxShadow: subTab === id ? 'var(--shadow-sm)' : 'none',
      transition: 'all .2s'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, templates.map(t => {
    const muscles = MUSCLE_DEFS.map(m => ({
      ...m,
      value: t.muscles.includes(m.id) ? 72 : 0,
      tone: t.muscles.includes(m.id) ? 'signal' : 'rest'
    }));
    return /*#__PURE__*/React.createElement(Card, {
      key: t.id,
      interactive: true,
      style: {
        padding: 0,
        overflow: 'hidden'
      },
      onClick: () => setSelected(t)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 13,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(MuscleMapView, {
      gender: "female",
      muscles: muscles,
      view: "both",
      height: 70,
      style: {
        borderRadius: 'var(--radius-sm)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-strong)',
        marginBottom: 3
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--text-muted)',
        marginBottom: 5,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, t.exercises.slice(0, 3).map(e => e.name).join(' · '), t.exercises.length > 3 ? ` +${t.exercises.length - 3}` : ''), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 11
    }), " ", t.duration)), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16,
      color: "var(--text-faint)"
    })));
  }), templates.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 20px',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus-circle",
    size: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "Tap + to create your first template"))));
}
window.SessionDetail = SessionDetail;
window.SessionsScreen = SessionsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/SessionsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/kit-util.jsx
try { (() => {
// Shared helpers for the Actus mobile UI kit.
// Loaded before the screen scripts. Exposes window.DS and window.Icon.

window.DS = window.ActusBiotechDesignSystem_e79e78;

// Lucide icon helper — renders an <svg> via the global lucide UMD build.
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    ref.current.appendChild(i);
    window.lucide.createIcons();
    const svg = ref.current.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.style.stroke = color;
      svg.style.strokeWidth = strokeWidth;
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/kit-util.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// HomePage — hero, trust, features, how-it-works, showcase, metrics, CTA.
function Hero({
  onNav
}) {
  const {
    Button,
    Badge
  } = window.DS;
  const Icon = window.Icon;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--ink-950)',
      color: '#fff',
      overflow: 'hidden',
      padding: '90px 40px 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      left: '52%',
      width: 760,
      height: 620,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,120,232,0.16), transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--signal-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--signal-500)',
      boxShadow: 'var(--glow-signal-sm)'
    }
  }), " Real-time EMG biowearable"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 68,
      lineHeight: 1.02,
      fontWeight: 600,
      letterSpacing: '-.03em',
      margin: '22px 0 0'
    }
  }, "Train with", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--signal-400)'
    }
  }, "signal.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--neutral-300)',
      maxWidth: 480,
      marginTop: 24
    }
  }, "Wearable sensors read every muscle as you move. Actus turns raw EMG into calm, real-time guidance on your form and fatigue \u2014 rep by rep."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav('pricing')
  }, "Get Actus"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    })
  }, "Watch the science")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 34,
      marginTop: 46
    }
  }, [['6', 'EMG sensors'], ['1kHz', 'sample rate'], ['<20ms', 'latency']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 28,
      fontWeight: 600,
      color: '#fff'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--neutral-400)',
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 16,
      padding: 30,
      background: 'linear-gradient(165deg, rgba(36,42,49,0.9), rgba(14,18,22,0.9))',
      border: '1px solid var(--ink-700)',
      boxShadow: '0 40px 90px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-pulse.svg",
    alt: "",
    style: {
      width: 120,
      animation: 'actus-breathe 3.4s var(--ease-in-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 420 90",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "0,45 150,45 168,45 180,20 196,45 206,68 220,12 232,78 244,45 270,45 286,45 300,33 312,57 326,45 420,45",
    fill: "none",
    stroke: "var(--signal-500)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      filter: 'drop-shadow(0 0 6px rgba(136,120,232,0.55))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      WebkitBackdropFilter: 'blur(10px)',
      backdropFilter: 'blur(10px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--neutral-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--good-500)'
    }
  }), " Left quad \xB7 optimal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--signal-400)'
    }
  }, "84%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -22,
      left: -22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      borderRadius: 999,
      background: 'var(--surface-glass)',
      WebkitBackdropFilter: 'blur(16px)',
      backdropFilter: 'blur(16px)',
      boxShadow: 'var(--shadow-lg)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fatigue-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "triangle-alert",
    size: 15
  })), " Fatigue alert \xB7 R calf")))));
}
function Trust() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '34px 40px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, "Trusted by elite programs"), ['ALTITUDE', 'KINETIX', 'PRO·LAB', 'VANGUARD FC', 'OLYMPÅ'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '.04em',
      color: 'var(--neutral-300)'
    }
  }, n))));
}
function Features() {
  const {
    Card
  } = window.DS;
  const Icon = window.Icon;
  const items = [{
    icon: 'scan-line',
    title: 'Real-time form',
    body: 'See which muscles are firing — and which are slacking — the instant you move. Fix imbalances before they become habits.',
    tone: 'var(--signal-500)'
  }, {
    icon: 'triangle-alert',
    title: 'Fatigue alerts',
    body: 'A gentle haptic and on-screen cue the moment a muscle nears fatigue, so you stop a rep short of breakdown — not after.',
    tone: 'var(--fatigue-500)'
  }, {
    icon: 'heart-pulse',
    title: 'Smarter recovery',
    body: 'Per-muscle recovery scoring tells you exactly what is ready to train tomorrow, and what still needs a day.',
    tone: 'var(--good-500)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--accent-text)'
    }
  }, "Why Actus"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      fontWeight: 600,
      letterSpacing: '-.02em',
      color: 'var(--text-strong)',
      margin: '16px 0 0',
      lineHeight: 1.1
    }
  }, "Coaching that lives in your muscles.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      marginTop: 44
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 8,
      background: 'var(--surface-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: it.tone
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '20px 0 10px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, it.body))))));
}
function HowItWorks() {
  const Photo = window.Photo;
  const steps = [{
    n: '01',
    title: 'Place the sensors',
    body: 'Six featherweight EMG sensors snap onto target muscles in seconds.',
    label: 'Sensor on skin'
  }, {
    n: '02',
    title: 'Sync the Hub',
    body: 'The central hub streams every channel at 1kHz with sub-20ms latency.',
    label: 'Actus Hub'
  }, {
    n: '03',
    title: 'Read your signal',
    body: 'The app translates it into calm, glanceable guidance as you train.',
    label: 'App in hand'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '88px 40px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--accent-text)'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      fontWeight: 600,
      letterSpacing: '-.02em',
      color: 'var(--text-strong)',
      margin: '16px 0 0',
      lineHeight: 1.1
    }
  }, "From muscle to insight in three steps.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 26,
      marginTop: 52
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n
  }, /*#__PURE__*/React.createElement(Photo, {
    label: s.label,
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--accent-text)',
      marginTop: 20
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '8px 0 8px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, s.body))))));
}
function Showcase() {
  const Photo = window.Photo,
    Icon = window.Icon;
  const {
    Badge
  } = window.DS;
  const bullets = ['Live per-muscle activation map', 'Haptic fatigue alerts', 'Per-muscle recovery scoring', 'Session reports your coach can read'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-950)',
      color: '#fff',
      padding: '92px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '40%',
      top: '20%',
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,120,232,0.12), transparent 62%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "App \u2014 live session",
    ratio: "3 / 4",
    dark: true,
    style: {
      maxWidth: 320,
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--signal-400)'
    }
  }, "The app"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      fontWeight: 600,
      letterSpacing: '-.02em',
      margin: '16px 0 18px',
      lineHeight: 1.1
    }
  }, "Your whole body, on one calm screen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--neutral-300)',
      maxWidth: 440
    }
  }, "No raw graphs to decode. Actus shows a living muscle map and tells you \u2014 in plain language \u2014 what to push, what to ease, and what to recover."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px 24px',
      marginTop: 30
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14.5,
      color: 'var(--neutral-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--signal-400)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), b))))));
}
function Metrics() {
  const data = [['12k+', 'athletes training'], ['98%', 'fewer form breakdowns'], ['1.2M', 'sessions analyzed'], ['4.9★', 'app store rating']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '70px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, data.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 44,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-.02em'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, l)))));
}
function CTA({
  onNav
}) {
  const {
    Button
  } = window.DS;
  const Icon = window.Icon;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '40px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      borderRadius: 'var(--radius-2xl)',
      padding: '64px 48px',
      background: 'linear-gradient(140deg, var(--ink-850), var(--ink-950))',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 600,
      height: 320,
      background: 'radial-gradient(circle, rgba(136,120,232,0.18), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 46,
      fontWeight: 600,
      letterSpacing: '-.02em',
      lineHeight: 1.08
    }
  }, "Feel every fiber fire."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--neutral-300)',
      maxWidth: 480,
      margin: '16px auto 0'
    }
  }, "Start training on signal. Free shipping and a 30-day return window."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav('pricing')
  }, "Get Actus"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff'
    }
  }, "Book a demo")))));
}
function Manifesto() {
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '94px 40px',
      textAlign: 'center',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--accent-text)'
    }
  }, "The Actus idea"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 600,
      lineHeight: 1.22,
      letterSpacing: '-.015em',
      color: 'var(--text-strong)',
      marginTop: 22
    }
  }, "Most training is a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "guess."), " Actus makes every rep ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-text)'
    }
  }, "measurable."))));
}
function Comparison() {
  const {
    Icon,
    Reveal,
    Spaced
  } = window;
  const guess = ['Guessing which muscle is working', 'Overtraining blind to fatigue', 'Left/right imbalances you never feel', 'Recovery by gut feel'];
  const signal = ['See every muscle fire, live', 'Haptic alerts before fatigue hits', 'Catch imbalances the instant they show', 'Measured, per-muscle recovery'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '94px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 52px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--accent-text)'
    }
  }, "The difference"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      fontWeight: 600,
      letterSpacing: '-.02em',
      color: 'var(--text-strong)',
      margin: '16px 0 0',
      lineHeight: 1.1
    }
  }, "Stop training in the dark.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      padding: '32px 30px',
      background: 'var(--neutral-50)',
      border: '1px solid var(--border-default)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "The guesswork"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 22
    }
  }, guess.map(g => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 15.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--neutral-150)',
      color: 'var(--neutral-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 15,
    strokeWidth: 2.6
  })), g))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      padding: '32px 30px',
      background: 'linear-gradient(160deg, var(--ink-800), var(--ink-950))',
      border: '1px solid rgba(136,120,232,0.30)',
      boxShadow: 'var(--glow-signal-md)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--signal-400)'
    }
  }, "Training on signal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 22
    }
  }, signal.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 15.5,
      color: 'var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'rgba(136,120,232,0.16)',
      color: 'var(--signal-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    strokeWidth: 2.6
  })), s))))))));
}
function Mission() {
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-950)',
      color: '#fff',
      padding: '88px 40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 620,
      height: 300,
      background: 'radial-gradient(circle, rgba(136,120,232,0.10), transparent 62%)'
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-pulse-mono.svg",
    alt: "",
    style: {
      height: 44,
      marginBottom: 26,
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 300,
      fontStyle: 'italic',
      lineHeight: 1.4,
      color: 'var(--neutral-100)',
      letterSpacing: '.01em'
    }
  }, "\u201CTo take the guesswork out of training \u2014 one muscle fiber at a time.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--neutral-500)',
      marginTop: 22
    }
  }, "Our mission")));
}
function HomePage({
  onNav
}) {
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Trust, null), /*#__PURE__*/React.createElement(Manifesto, null), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Features, null)), /*#__PURE__*/React.createElement(Comparison, null), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(HowItWorks, null)), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Showcase, null)), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Metrics, null)), /*#__PURE__*/React.createElement(Mission, null), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  })));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PricingPage.jsx
try { (() => {
// PricingPage — plan cards (one featured) + FAQ.
function PlanCard({
  plan
}) {
  const {
    Button,
    Badge
  } = window.DS;
  const Icon = window.Icon;
  const feat = plan.featured;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 'var(--radius-2xl)',
      padding: '32px 28px',
      background: feat ? 'linear-gradient(160deg, var(--ink-800), var(--ink-950))' : 'var(--surface-card)',
      color: feat ? '#fff' : 'var(--text-body)',
      border: feat ? '1px solid rgba(136,120,232,0.30)' : '1px solid var(--border-default)',
      boxShadow: feat ? 'var(--glow-signal-md), 0 30px 70px rgba(0,0,0,0.3)' : 'var(--shadow-sm)',
      transform: feat ? 'translateY(-12px)' : 'none',
      position: 'relative'
    }
  }, feat && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 22,
      right: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "signal",
    solid: true
  }, "Most popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      color: feat ? '#fff' : 'var(--text-strong)'
    }
  }, plan.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: feat ? 'var(--neutral-300)' : 'var(--text-muted)',
      marginTop: 8,
      minHeight: 38
    }
  }, plan.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 700,
      color: feat ? '#fff' : 'var(--text-strong)',
      letterSpacing: '-.02em'
    }
  }, plan.price), plan.suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: feat ? 'var(--neutral-300)' : 'var(--text-muted)'
    }
  }, plan.suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: feat ? 'primary' : 'secondary',
    fullWidth: true,
    size: "md"
  }, plan.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, plan.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      fontSize: 14,
      color: feat ? 'var(--neutral-200)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: feat ? 'var(--signal-400)' : 'var(--good-500)',
      display: 'flex',
      marginTop: 1,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17
  })), f))));
}
function PricingPage() {
  const plans = [{
    name: 'Solo',
    tagline: 'For the individual athlete dialing in their form.',
    price: '$249',
    suffix: 'one-time',
    cta: 'Buy Solo kit',
    features: ['4 EMG sensors + Hub', 'Live muscle map', 'Fatigue alerts', 'Free Actus app']
  }, {
    name: 'Pro',
    tagline: 'Full-body coverage with recovery intelligence.',
    price: '$349',
    suffix: '+ $12/mo',
    cta: 'Buy Pro kit',
    featured: true,
    features: ['6 EMG sensors + Hub', 'Everything in Solo', 'Per-muscle recovery scoring', 'Coach-ready session reports', 'Priority support']
  }, {
    name: 'Team',
    tagline: 'Multi-athlete dashboards for programs.',
    price: 'Custom',
    suffix: '',
    cta: 'Talk to us',
    features: ['Volume sensor kits', 'Team activation dashboard', 'Athlete load management', 'Dedicated success manager']
  }];
  const faqs = [['Do I need a subscription?', 'The hardware works forever with the free app. Pro unlocks recovery scoring and coach reports for $12/mo.'], ['How long does the battery last?', 'Each sensor runs ~9 hours; the Hub holds a full training day and recharges in its case.'], ['Is it accurate?', 'Sensors sample at 1kHz with clinical-grade signal conditioning — the same EMG basis used in sports labs.'], ['Can my coach see my data?', 'Yes. Pro generates plain-language session reports you can share, plus live-share during a session.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-950)',
      color: '#fff',
      padding: '80px 40px 56px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -100,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 700,
      height: 360,
      background: 'radial-gradient(circle, rgba(136,120,232,0.14), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--signal-400)'
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      fontWeight: 600,
      letterSpacing: '-.025em',
      margin: '14px 0 0'
    }
  }, "Own the hardware. Train on signal."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--neutral-300)',
      maxWidth: 520,
      margin: '16px auto 0'
    }
  }, "One-time kits, no lock-in. Upgrade to Pro for recovery intelligence whenever you're ready."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      display: 'flex',
      gap: 22,
      alignItems: 'flex-start',
      transform: 'translateY(-36px)'
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(PlanCard, {
    key: p.name,
    plan: p
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '20px 40px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)',
      textAlign: 'center',
      letterSpacing: '-.02em',
      marginBottom: 30
    }
  }, "Questions, answered."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, faqs.map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, a)))))));
}
window.PricingPage = PricingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PricingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// SiteChrome — frosted sticky nav + footer.
function Nav({
  route,
  onNav
}) {
  const {
    Button
  } = window.DS;
  const Logo = window.Logo,
    Icon = window.Icon;
  const links = [['product', 'Product'], ['technology', 'Technology'], ['athletes', 'Athletes'], ['pricing', 'Pricing']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 40px',
      background: 'rgba(9,12,15,0.55)',
      WebkitBackdropFilter: 'blur(20px) saturate(170%)',
      backdropFilter: 'blur(20px) saturate(170%)',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26,
    light: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 34
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id === 'pricing' ? 'pricing' : 'home'),
    style: {
      cursor: 'pointer',
      fontSize: 14.5,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      color: route === id ? 'var(--signal-400)' : 'rgba(255,255,255,0.78)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer',
      fontSize: 14.5,
      fontWeight: 600,
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }),
    onClick: () => onNav('pricing')
  }, "Get Actus")));
}
function Footer() {
  const Logo = window.Logo;
  const cols = [['Product', ['Sensors', 'The Hub', 'Mobile app', 'For teams']], ['Company', ['About', 'Careers', 'Press', 'Contact']], ['Resources', ['The science', 'Support', 'Developers', 'Privacy']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-950)',
      color: 'var(--neutral-400)',
      padding: '64px 40px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 60",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 60,
      opacity: 0.25
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "0,30 400,30 430,30 450,12 470,48 490,30 900,30 930,30 950,18 970,42 990,30 1200,30",
    fill: "none",
    stroke: "var(--signal-500)",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26,
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 18,
      color: 'var(--neutral-400)'
    }
  }, "Real-time muscle intelligence. Wearable EMG that coaches your form and fatigue, rep by rep.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap'
    }
  }, cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--neutral-300)',
      fontWeight: 600,
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      fontSize: 14,
      color: 'var(--neutral-400)',
      cursor: 'pointer'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '48px auto 0',
      paddingTop: 22,
      borderTop: '1px solid var(--ink-800)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--neutral-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Actus Biotech. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Designed for athletes who train on signal.")));
}
window.Nav = Nav;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-util.jsx
try { (() => {
// Shared helpers for the Actus marketing site.
window.DS = window.ActusBiotechDesignSystem_e79e78;
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    ref.current.appendChild(i);
    window.lucide.createIcons();
    const svg = ref.current.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.style.stroke = color;
      svg.style.strokeWidth = strokeWidth;
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      ...style
    }
  });
}

// Brand lockup — pulse mark image + ACTUS wordmark in type.
function Logo({
  height = 26,
  light = false,
  mark = 'pulse'
}) {
  const src = mark === 'star' ? '../../assets/logo-mark-star.svg' : '../../assets/logo-mark-pulse-mono.svg';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Actus",
    style: {
      height,
      width: 'auto',
      filter: light ? 'none' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: height * 0.74,
      letterSpacing: '.22em',
      color: light ? '#fff' : 'var(--text-strong)',
      paddingLeft: 2
    }
  }, "ACTUS"));
}

// Labeled photography placeholder tile (no real product imagery available yet).
function Photo({
  label = 'Product photo',
  ratio,
  dark = false,
  style = {},
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      borderRadius: 'var(--radius-xl)',
      background: dark ? 'linear-gradient(160deg, var(--ink-800), var(--ink-950))' : 'linear-gradient(160deg, var(--neutral-50), var(--neutral-100))',
      border: '1px solid ' + (dark ? 'var(--ink-700)' : 'var(--border-default)'),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      overflow: 'hidden',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      color: dark ? 'var(--neutral-500)' : 'var(--text-faint)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 26
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: dark ? 'var(--neutral-500)' : 'var(--text-faint)',
      fontWeight: 600
    }
  }, label));
}
window.Icon = Icon;
window.Logo = Logo;
window.Photo = Photo;

// Scroll-reveal wrapper — quiet fade + rise as it enters view (PurelyBiome-style).
// Polls via rAF until in view, so it fires reliably regardless of scroll-event quirks.
function Reveal({
  children,
  delay = 0,
  y = 26,
  style = {}
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    let raf;
    const tick = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.9 && r.bottom > 0) {
        setShown(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity .8s var(--ease-out) ${delay}ms, transform .8s var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}

// Wide letter-spaced "decoded" heading treatment.
function Spaced({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: '0.22em',
      ...style
    }
  }, children);
}
window.Reveal = Reveal;
window.Spaced = Spaced;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-util.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ActivationRing = __ds_scope.ActivationRing;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.SignalMeter = __ds_scope.SignalMeter;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Switch = __ds_scope.Switch;

})();
