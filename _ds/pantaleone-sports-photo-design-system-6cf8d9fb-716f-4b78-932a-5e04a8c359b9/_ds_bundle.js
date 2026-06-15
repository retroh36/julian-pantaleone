/* @ds-bundle: {"format":3,"namespace":"PantaleoneSportsPhotoDesignSystem_6cf8d9","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CategoryFilter","sourcePath":"components/gallery/CategoryFilter.jsx"},{"name":"ExifBar","sourcePath":"components/gallery/ExifBar.jsx"},{"name":"PhotoCard","sourcePath":"components/gallery/PhotoCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"7a2f4ead64d6","components/core/Button.jsx":"51422e10db81","components/core/Eyebrow.jsx":"48af9ac1c9af","components/core/IconButton.jsx":"52d8aedc1c3a","components/core/Tag.jsx":"3782ffeafda2","components/forms/Input.jsx":"e458e046c095","components/forms/Textarea.jsx":"8e8243056eda","components/gallery/CategoryFilter.jsx":"26eabfb02081","components/gallery/ExifBar.jsx":"a8e2606fa7a5","components/gallery/PhotoCard.jsx":"118844bcb796","ui_kits/website/AboutBooking.jsx":"dc03c10b0940","ui_kits/website/Footer.jsx":"6b726f92cad3","ui_kits/website/Hero.jsx":"26ace1e6a456","ui_kits/website/Lightbox.jsx":"08a6131f05ec","ui_kits/website/Nav.jsx":"e12b54092c26","ui_kits/website/WorkGallery.jsx":"4781b9d5a8ca","ui_kits/website/app.jsx":"78837b7f0c8e","ui_kits/website/data.js":"76878ace8447","ui_kits/website/icons.jsx":"3f91c6243792"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PantaleoneSportsPhotoDesignSystem_6cf8d9 = window.PantaleoneSportsPhotoDesignSystem_6cf8d9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  light: {
    mark: "logo-mark-light.png",
    word: "logo-wordmark-light.png"
  },
  dark: {
    mark: "logo-mark.png",
    word: "logo-wordmark.png"
  }
};
function Logo({
  variant = "lockup",
  theme = "light",
  assetBase = "assets/",
  height = 40,
  href,
  className = "",
  ...rest
}) {
  const set = FILES[theme] || FILES.light;
  const base = assetBase.endsWith("/") ? assetBase : assetBase + "/";
  const mark = /*#__PURE__*/React.createElement("img", {
    src: base + set.mark,
    alt: "Pantaleone",
    style: {
      height,
      width: "auto",
      display: "block"
    }
  });
  const word = /*#__PURE__*/React.createElement("img", {
    src: base + set.word,
    alt: "Julian Pantaleone Sports Photography",
    style: {
      height: height * 0.78,
      width: "auto",
      display: "block"
    }
  });
  let content;
  if (variant === "mark") content = mark;else if (variant === "wordmark") content = word;else content = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: height * 0.32
    }
  }, mark, /*#__PURE__*/React.createElement("img", {
    src: base + set.word,
    alt: "Julian Pantaleone Sports Photography",
    style: {
      height: height * 0.62,
      width: "auto",
      display: "block"
    }
  }));
  const style = {
    display: "inline-flex",
    alignItems: "center",
    lineHeight: 0
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: className,
      style: style,
      "aria-label": "Pantaleone Sports Photography \u2014 home"
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: style
  }, rest), content);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.jp-btn{
  --_bg: var(--accent);
  --_fg: var(--accent-contrast);
  display:inline-flex; align-items:center; justify-content:center; gap:.55em;
  font-family:var(--font-body); font-weight:var(--fw-semibold);
  letter-spacing:.01em; line-height:1; white-space:nowrap;
  border:1px solid transparent; border-radius:var(--radius-sm);
  cursor:pointer; text-decoration:none; user-select:none;
  transition: background var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out);
}
.jp-btn:focus-visible{ outline:none; box-shadow:var(--ring); }
.jp-btn[disabled],.jp-btn[aria-disabled="true"]{ opacity:.45; pointer-events:none; }
.jp-btn:active{ transform:scale(var(--press-scale)); }

/* sizes */
.jp-btn--sm{ font-size:var(--text-sm); padding:.5rem .85rem; }
.jp-btn--md{ font-size:var(--text-base); padding:.7rem 1.15rem; }
.jp-btn--lg{ font-size:var(--text-lg); padding:.95rem 1.6rem; }

/* uppercase athletic treatment */
.jp-btn--athletic{ font-family:var(--font-display); font-weight:var(--fw-bold);
  text-transform:uppercase; letter-spacing:.04em; }

/* variants */
.jp-btn--primary{ background:var(--accent); color:var(--accent-contrast); box-shadow:var(--glow-blue-soft); }
.jp-btn--primary:hover{ background:var(--accent-hover); box-shadow:var(--glow-blue); }
.jp-btn--primary:active{ background:var(--accent-press); }

.jp-btn--secondary{ background:transparent; color:var(--text-primary); border-color:var(--border-strong); }
.jp-btn--secondary:hover{ border-color:var(--accent); color:var(--accent-hover); }

.jp-btn--ghost{ background:transparent; color:var(--text-secondary); }
.jp-btn--ghost:hover{ background:rgba(255,255,255,.06); color:var(--text-primary); }

.jp-btn--solid-light{ background:var(--ink-050); color:var(--ink-900); }
.jp-btn--solid-light:hover{ background:#fff; }

.jp-btn--block{ display:flex; width:100%; }
.jp-btn svg{ width:1.15em; height:1.15em; flex:none; }
`;
let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById("jp-button-css")) {
      injected = true;
      return;
    }
    const s = document.createElement("style");
    s.id = "jp-button-css";
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }, []);
}
function Button({
  variant = "primary",
  size = "md",
  athletic = false,
  block = false,
  as = "button",
  href,
  leadingIcon,
  trailingIcon,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const Tag = href ? "a" : as;
  const cls = ["jp-btn", `jp-btn--${variant}`, `jp-btn--${size}`, athletic ? "jp-btn--athletic" : "", block ? "jp-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    "aria-disabled": disabled || undefined,
    disabled: Tag === "button" ? disabled : undefined
  }, rest), leadingIcon, children && /*#__PURE__*/React.createElement("span", null, children), trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.jp-eyebrow{
  display:inline-flex; align-items:center; gap:.7em;
  font-family:var(--font-mono); font-size:var(--text-eyebrow);
  font-weight:var(--fw-medium); letter-spacing:var(--tracking-eyebrow);
  text-transform:uppercase; color:var(--accent-hover); line-height:1;
}
.jp-eyebrow--muted{ color:var(--text-muted); }
.jp-eyebrow--rule::before{ content:""; width:28px; height:2px; background:var(--accent); display:inline-block; }
`;
let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById("jp-eyebrow-css")) {
      injected = true;
      return;
    }
    const s = document.createElement("style");
    s.id = "jp-eyebrow-css";
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }, []);
}
function Eyebrow({
  rule = false,
  muted = false,
  as = "span",
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = ["jp-eyebrow", rule ? "jp-eyebrow--rule" : "", muted ? "jp-eyebrow--muted" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.jp-iconbtn{
  display:inline-flex; align-items:center; justify-content:center;
  border:1px solid transparent; cursor:pointer; color:var(--text-secondary);
  background:transparent; border-radius:var(--radius-sm);
  transition: background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out);
}
.jp-iconbtn:hover{ color:var(--text-primary); background:rgba(255,255,255,.06); }
.jp-iconbtn:active{ transform:scale(var(--press-scale)); }
.jp-iconbtn:focus-visible{ outline:none; box-shadow:var(--ring); }
.jp-iconbtn[disabled]{ opacity:.4; pointer-events:none; }
.jp-iconbtn--sm{ width:34px; height:34px; }
.jp-iconbtn--md{ width:42px; height:42px; }
.jp-iconbtn--lg{ width:52px; height:52px; }
.jp-iconbtn--solid{ background:var(--accent); color:#fff; box-shadow:var(--glow-blue-soft); }
.jp-iconbtn--solid:hover{ background:var(--accent-hover); color:#fff; }
.jp-iconbtn--outline{ border-color:var(--border-strong); }
.jp-iconbtn--outline:hover{ border-color:var(--accent); color:var(--accent-hover); background:transparent; }
.jp-iconbtn--glass{ background:var(--glass-bg); backdrop-filter:var(--blur-md); -webkit-backdrop-filter:var(--blur-md); color:#fff; border-color:var(--border-default); }
.jp-iconbtn--glass:hover{ background:rgba(15,18,25,.8); }
.jp-iconbtn svg{ width:1.2em; height:1.2em; }
.jp-iconbtn--sm svg{ font-size:16px; } .jp-iconbtn--md svg{ font-size:19px; } .jp-iconbtn--lg svg{ font-size:22px; }
`;
let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById("jp-iconbtn-css")) {
      injected = true;
      return;
    }
    const s = document.createElement("style");
    s.id = "jp-iconbtn-css";
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }, []);
}
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const cls = ["jp-iconbtn", `jp-iconbtn--${variant}`, `jp-iconbtn--${size}`, className].filter(Boolean).join(" ");
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

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.jp-tag{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-mono); font-size:var(--text-xs);
  letter-spacing:.08em; text-transform:uppercase; font-weight:500;
  padding:.4em .7em; border-radius:var(--radius-sm); line-height:1;
  border:1px solid transparent; white-space:nowrap;
}
.jp-tag--solid{ background:var(--accent); color:#fff; }
.jp-tag--outline{ background:transparent; color:var(--text-secondary); border-color:var(--border-default); }
.jp-tag--ghost{ background:rgba(255,255,255,.06); color:var(--text-secondary); }
.jp-tag--glass{ background:var(--glass-bg); backdrop-filter:var(--blur-md); -webkit-backdrop-filter:var(--blur-md); color:#fff; border-color:var(--border-default); }
.jp-tag--success{ background:rgba(25,195,125,.16); color:var(--success); }
.jp-tag--dot::before{ content:""; width:.5em; height:.5em; border-radius:999px; background:currentColor; }
.jp-tag--interactive{ cursor:pointer; transition:border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
.jp-tag--interactive:hover{ border-color:var(--accent); color:var(--accent-hover); }
`;
let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById("jp-tag-css")) {
      injected = true;
      return;
    }
    const s = document.createElement("style");
    s.id = "jp-tag-css";
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }, []);
}
function Tag({
  variant = "outline",
  dot = false,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const cls = ["jp-tag", `jp-tag--${variant}`, dot ? "jp-tag--dot" : "", interactive ? "jp-tag--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.jp-field{ display:flex; flex-direction:column; gap:.45rem; font-family:var(--font-body); }
.jp-field__label{ font-size:var(--text-sm); font-weight:var(--fw-medium); color:var(--text-secondary); }
.jp-field__req{ color:var(--accent-hover); margin-left:.2em; }
.jp-input{
  width:100%; font-family:var(--font-body); font-size:var(--text-base);
  color:var(--text-primary); background:var(--surface-inset);
  border:1px solid var(--border-default); border-radius:var(--radius-sm);
  padding:.7rem .9rem; line-height:1.4;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.jp-input::placeholder{ color:var(--text-faint); }
.jp-input:hover{ border-color:var(--border-strong); }
.jp-input:focus{ outline:none; border-color:var(--accent); box-shadow:var(--ring); background:var(--surface-base); }
.jp-input--invalid{ border-color:var(--danger); }
.jp-input--invalid:focus{ box-shadow:0 0 0 3px rgba(255,77,77,.35); }
.jp-input:disabled{ opacity:.5; cursor:not-allowed; }
.jp-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
.jp-field__hint--error{ color:var(--danger); }
textarea.jp-input{ resize:vertical; min-height:120px; }
`;
let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById("jp-input-css")) {
      injected = true;
      return;
    }
    const s = document.createElement("style");
    s.id = "jp-input-css";
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }, []);
}
function Input({
  label,
  hint,
  error,
  required = false,
  id,
  className = "",
  ...rest
}) {
  useStyles();
  const autoId = React.useId();
  const fieldId = id || autoId;
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    className: "jp-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "jp-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "jp-field__req"
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ["jp-input", invalid ? "jp-input--invalid" : "", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ["jp-field__hint", invalid ? "jp-field__hint--error" : ""].filter(Boolean).join(" ")
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  required = false,
  id,
  rows = 4,
  className = "",
  ...rest
}) {
  // shares the .jp-input / .jp-field styles injected by Input.jsx
  const autoId = React.useId();
  const fieldId = id || autoId;
  const invalid = Boolean(error);
  React.useEffect(() => {
    if (document.getElementById("jp-input-css")) return;
    const s = document.createElement("style");
    s.id = "jp-input-css";
    s.textContent = `
.jp-field{ display:flex; flex-direction:column; gap:.45rem; font-family:var(--font-body); }
.jp-field__label{ font-size:var(--text-sm); font-weight:var(--fw-medium); color:var(--text-secondary); }
.jp-field__req{ color:var(--accent-hover); margin-left:.2em; }
.jp-input{ width:100%; font-family:var(--font-body); font-size:var(--text-base); color:var(--text-primary); background:var(--surface-inset); border:1px solid var(--border-default); border-radius:var(--radius-sm); padding:.7rem .9rem; line-height:1.4; transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
.jp-input::placeholder{ color:var(--text-faint); }
.jp-input:hover{ border-color:var(--border-strong); }
.jp-input:focus{ outline:none; border-color:var(--accent); box-shadow:var(--ring); background:var(--surface-base); }
.jp-input--invalid{ border-color:var(--danger); }
.jp-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
.jp-field__hint--error{ color:var(--danger); }
textarea.jp-input{ resize:vertical; min-height:120px; }`;
    document.head.appendChild(s);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "jp-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "jp-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "jp-field__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    className: ["jp-input", invalid ? "jp-input--invalid" : "", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ["jp-field__hint", invalid ? "jp-field__hint--error" : ""].filter(Boolean).join(" ")
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/gallery/CategoryFilter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.jp-catfilter{ display:flex; flex-wrap:wrap; gap:.55rem; }
.jp-catfilter__btn{
  font-family:var(--font-mono); font-size:var(--text-xs); letter-spacing:.1em; text-transform:uppercase;
  font-weight:500; color:var(--text-muted); background:transparent;
  border:1px solid var(--border-default); border-radius:var(--radius-pill);
  padding:.5em 1em; cursor:pointer; line-height:1; display:inline-flex; align-items:center; gap:.5em;
  transition: color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.jp-catfilter__btn:hover{ color:var(--text-primary); border-color:var(--border-strong); }
.jp-catfilter__btn:focus-visible{ outline:none; box-shadow:var(--ring); }
.jp-catfilter__btn[aria-pressed="true"]{ color:#fff; background:var(--accent); border-color:var(--accent); }
.jp-catfilter__count{ font-size:.85em; opacity:.7; }
`;
let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById("jp-catfilter-css")) {
      injected = true;
      return;
    }
    const s = document.createElement("style");
    s.id = "jp-catfilter-css";
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }, []);
}
function CategoryFilter({
  categories = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  useStyles();
  const norm = categories.map(c => typeof c === "string" ? {
    id: c,
    label: c
  } : c);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["jp-catfilter", className].filter(Boolean).join(" "),
    role: "group"
  }, rest), norm.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    type: "button",
    className: "jp-catfilter__btn",
    "aria-pressed": value === c.id,
    onClick: () => onChange && onChange(c.id)
  }, c.label, c.count != null && /*#__PURE__*/React.createElement("span", {
    className: "jp-catfilter__count"
  }, c.count))));
}
Object.assign(__ds_scope, { CategoryFilter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/CategoryFilter.jsx", error: String((e && e.message) || e) }); }

// components/gallery/ExifBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.jp-exif{ display:flex; flex-wrap:wrap; align-items:center; gap:.55rem .85rem;
  font-family:var(--font-mono); font-size:var(--text-meta); letter-spacing:var(--tracking-mono);
  color:var(--text-muted); }
.jp-exif__item{ display:inline-flex; align-items:center; gap:.4em; white-space:nowrap; }
.jp-exif__item b{ color:var(--text-primary); font-weight:var(--fw-medium); }
.jp-exif__sep{ color:var(--text-faint); }
.jp-exif--accent .jp-exif__item b{ color:var(--accent-hover); }
`;
let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById("jp-exif-css")) {
      injected = true;
      return;
    }
    const s = document.createElement("style");
    s.id = "jp-exif-css";
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }, []);
}
function ExifBar({
  data = {},
  accent = false,
  className = "",
  ...rest
}) {
  useStyles();
  const order = ["camera", "lens", "focal", "aperture", "shutter", "iso"];
  const labels = {
    aperture: "",
    shutter: "",
    iso: "ISO",
    focal: "",
    camera: "",
    lens: ""
  };
  const items = order.filter(k => data[k] != null).map(k => ({
    k,
    v: data[k],
    pre: labels[k]
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["jp-exif", accent ? "jp-exif--accent" : "", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.k
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "jp-exif__sep",
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "jp-exif__item"
  }, it.pre && `${it.pre} `, /*#__PURE__*/React.createElement("b", null, it.v)))));
}
Object.assign(__ds_scope, { ExifBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/ExifBar.jsx", error: String((e && e.message) || e) }); }

// components/gallery/PhotoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.jp-photo{
  position:relative; display:block; overflow:hidden;
  border-radius:var(--radius-photo); background:var(--surface-card);
  box-shadow:var(--inset-hairline); cursor:pointer; text-decoration:none;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.jp-photo:hover{ transform:translateY(var(--lift-y)); box-shadow:var(--shadow-photo); }
.jp-photo:focus-visible{ outline:none; box-shadow:var(--ring); }
.jp-photo__img{
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  transition: transform var(--dur-reveal) var(--ease-out), filter var(--dur-base) var(--ease-out);
  filter:saturate(1.02);
}
.jp-photo:hover .jp-photo__img{ transform:scale(1.06); }
.jp-photo__scrim{ position:absolute; inset:0; background:var(--scrim-bottom); opacity:.9;
  transition:opacity var(--dur-base) var(--ease-out); }
.jp-photo:hover .jp-photo__scrim{ opacity:1; }
.jp-photo__cat{ position:absolute; top:12px; left:12px; z-index:2;
  font-family:var(--font-mono); font-size:var(--text-xs); letter-spacing:.1em; text-transform:uppercase;
  color:#fff; background:var(--glass-bg); backdrop-filter:var(--blur-md); -webkit-backdrop-filter:var(--blur-md);
  padding:.35em .65em; border-radius:var(--radius-sm); border:1px solid var(--border-default); }
.jp-photo__body{ position:absolute; left:0; right:0; bottom:0; z-index:2; padding:18px 18px 16px;
  display:flex; flex-direction:column; gap:6px; }
.jp-photo__rule{ width:30px; height:2px; background:var(--accent); transform:scaleX(0); transform-origin:left;
  transition:transform var(--dur-base) var(--ease-out); }
.jp-photo:hover .jp-photo__rule{ transform:scaleX(1); }
.jp-photo__title{ font-family:var(--font-display); font-weight:var(--fw-bold); text-transform:uppercase;
  letter-spacing:-0.01em; font-size:var(--text-xl); line-height:1.05; color:#fff; margin:0; }
.jp-photo__meta{ font-family:var(--font-mono); font-size:var(--text-xs); letter-spacing:.05em; color:rgba(255,255,255,.72);
  max-height:0; opacity:0; overflow:hidden; transition:max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out); }
.jp-photo:hover .jp-photo__meta{ max-height:2em; opacity:1; }
`;
let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById("jp-photo-css")) {
      injected = true;
      return;
    }
    const s = document.createElement("style");
    s.id = "jp-photo-css";
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }, []);
}
function PhotoCard({
  src,
  alt = "",
  title,
  category,
  meta,
  aspect = "4/5",
  href,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["jp-photo", className].filter(Boolean).join(" "),
    href: href,
    style: {
      aspectRatio: aspect
    },
    tabIndex: 0
  }, rest), /*#__PURE__*/React.createElement("img", {
    className: "jp-photo__img",
    src: src,
    alt: alt,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jp-photo__scrim"
  }), category && /*#__PURE__*/React.createElement("span", {
    className: "jp-photo__cat"
  }, category), /*#__PURE__*/React.createElement("div", {
    className: "jp-photo__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jp-photo__rule"
  }), title && /*#__PURE__*/React.createElement("h3", {
    className: "jp-photo__title"
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    className: "jp-photo__meta"
  }, meta), children));
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutBooking.jsx
try { (() => {
function AboutBooking({
  formRef
}) {
  const {
    Eyebrow,
    Input,
    Textarea,
    Button,
    Tag
  } = window.PantaleoneSportsPhotoDesignSystem_6cf8d9;
  const {
    Camera,
    ArrowRight
  } = window.Icons;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about__copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Behind the Lens"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 18
    }
  }, "Ten Seasons On The Touchline"), /*#__PURE__*/React.createElement("p", null, "I'm Julian \u2014 a sports photographer who lives for the split second everyone else blinks through. I've shot title deciders, county meets, and a lot of cold Tuesday-night training sessions."), /*#__PURE__*/React.createElement("p", null, "My job is simple: make the energy of the moment something you can hang on a wall. Fast glass, faster shutter, and a feel for where the action's about to go."), /*#__PURE__*/React.createElement("div", {
    className: "about__stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stat__num"
  }, /*#__PURE__*/React.createElement("em", null, "1.2"), "M"), /*#__PURE__*/React.createElement("div", {
    className: "stat__lbl"
  }, "Frames Shot")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stat__num"
  }, /*#__PURE__*/React.createElement("em", null, "240"), "+"), /*#__PURE__*/React.createElement("div", {
    className: "stat__lbl"
  }, "Events Covered")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stat__num"
  }, /*#__PURE__*/React.createElement("em", null, "10")), /*#__PURE__*/React.createElement("div", {
    className: "stat__lbl"
  }, "Seasons")))), /*#__PURE__*/React.createElement("div", {
    className: "about__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/gym-01.jpg",
    alt: "Julian shooting on location"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "book",
    ref: formRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking"
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking__glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "booking__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Get In Touch"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 16
    }
  }, "Book a Shoot"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      maxWidth: "34ch"
    }
  }, "Match day, team portraits, or a full season package \u2014 tell me what you need and I'll get back within a day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "ghost",
    dot: true
  }, "Available this season"), /*#__PURE__*/React.createElement(Tag, {
    variant: "outline"
  }, "Based in London"))), /*#__PURE__*/React.createElement("form", {
    className: "booking__form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Alex Rivera",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@club.com",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Sport / Event",
    placeholder: "e.g. U18 Cup Final"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Tell me about the shoot",
    rows: 3,
    placeholder: "Date, venue, what you're after\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    athletic: true,
    block: true,
    type: "submit",
    trailingIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    })
  }, sent ? "Thanks — I'll be in touch" : "Send Request"))))));
}
Object.assign(window, {
  AboutBooking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutBooking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer({
  onNav
}) {
  const {
    Logo,
    IconButton
  } = window.PantaleoneSportsPhotoDesignSystem_6cf8d9;
  const {
    Instagram,
    Mail,
    Share
  } = window.Icons;
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__inner"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    theme: "light",
    assetBase: "../../assets/",
    height: 36,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("top");
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "footer__socials"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Instagram",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Instagram, {
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Email",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Mail, {
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Share",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Share, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "footer__copy"
  }, "\xA9 2026 Julian Pantaleone \xB7 Sports Photography")));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onNav
}) {
  const {
    Button,
    Eyebrow
  } = window.PantaleoneSportsPhotoDesignSystem_6cf8d9;
  const {
    ArrowRight
  } = window.Icons;
  return /*#__PURE__*/React.createElement("header", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__img",
    src: "../../assets/photos/soccer-04.jpg",
    alt: "Floodlit pitch at night"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Sports Photography \xB7 Est. 2015"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "In The ", /*#__PURE__*/React.createElement("em", null, "Frame")), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, "I chase the moments that decide the game \u2014 the last-minute winner, the breath before the whistle, the chalk in the air. From the touchline to the mat, here's the work."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    athletic: true,
    trailingIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    onClick: () => onNav("work")
  }, "Enter the Portfolio"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("book")
  }, "Book a Shoot"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrollcue"
  }, /*#__PURE__*/React.createElement("span", null, "SCROLL"), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrollline"
  })));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Lightbox.jsx
try { (() => {
function Lightbox({
  index,
  onClose,
  onPrev,
  onNext
}) {
  const {
    IconButton,
    Tag,
    ExifBar
  } = window.PantaleoneSportsPhotoDesignSystem_6cf8d9;
  const {
    X,
    ChevronLeft,
    ChevronRight,
    Heart,
    Download,
    Share
  } = window.Icons;
  const photos = window.PHOTOS;
  const p = photos[index];
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);
  if (p == null) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "lightbox",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Close",
    variant: "glass",
    size: "lg",
    className: "lightbox__close",
    onClick: e => {
      e.stopPropagation();
      onClose();
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Previous",
    variant: "glass",
    size: "lg",
    className: "lightbox__nav lightbox__nav--prev",
    onClick: e => {
      e.stopPropagation();
      onPrev();
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 22
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Next",
    variant: "glass",
    size: "lg",
    className: "lightbox__nav lightbox__nav--next",
    onClick: e => {
      e.stopPropagation();
      onNext();
    }
  }, /*#__PURE__*/React.createElement(ChevronRight, {
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "lightbox__stage",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("img", {
    className: "lightbox__img",
    src: p.src,
    alt: p.title
  }), /*#__PURE__*/React.createElement("div", {
    className: "lightbox__bar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    variant: "solid"
  }, p.catLabel), /*#__PURE__*/React.createElement("h3", {
    className: "lightbox__title"
  }, p.title), /*#__PURE__*/React.createElement(ExifBar, {
    accent: true,
    data: p.exif
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lightbox__count"
  }, String(index + 1).padStart(2, "0"), " / ", String(photos.length).padStart(2, "0")), /*#__PURE__*/React.createElement(IconButton, {
    label: "Like",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Heart, {
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Share",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Share, {
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Download",
    variant: "solid"
  }, /*#__PURE__*/React.createElement(Download, {
    size: 18
  }))))));
}
Object.assign(window, {
  Lightbox
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Lightbox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
const DS = window.PantaleoneSportsPhotoDesignSystem_6cf8d9;
function Nav({
  onNav,
  active
}) {
  const {
    Logo,
    Button
  } = DS;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector(".site-scroll") || window;
    const el = document.querySelector(".site-scroll");
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 40);
    root.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => root.removeEventListener("scroll", onScroll);
  }, []);
  const links = [{
    id: "work",
    label: "Work"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "book",
    label: "Book"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (scrolled ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    theme: "light",
    assetBase: "../../assets/",
    height: scrolled ? 34 : 40,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("top");
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    className: "nav__link" + (active === l.id ? " nav__link--active" : ""),
    onClick: () => onNav(l.id)
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    athletic: true,
    onClick: () => onNav("book")
  }, "Book a Shoot")));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WorkGallery.jsx
try { (() => {
function WorkGallery({
  onOpen
}) {
  const {
    Eyebrow,
    CategoryFilter,
    PhotoCard
  } = window.PantaleoneSportsPhotoDesignSystem_6cf8d9;
  const [cat, setCat] = React.useState("all");
  const photos = window.PHOTOS;
  const counts = React.useMemo(() => {
    const c = {
      all: photos.length
    };
    photos.forEach(p => {
      c[p.cat] = (c[p.cat] || 0) + 1;
    });
    return c;
  }, [photos]);
  const cats = window.CATEGORIES.map(x => ({
    ...x,
    count: counts[x.id] || 0
  }));
  const shown = cat === "all" ? photos : photos.filter(p => p.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "The Gallery")), /*#__PURE__*/React.createElement("div", {
    className: "work__filterrow"
  }, /*#__PURE__*/React.createElement(CategoryFilter, {
    value: cat,
    onChange: setCat,
    categories: cats
  }))), /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid"
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: p.span,
    key: p.id
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    src: p.src,
    category: p.catLabel,
    title: p.title,
    meta: `f/${String(p.exif.aperture).replace("f/", "")} · ${p.exif.shutter} · ISO ${p.exif.iso}`,
    onClick: () => onOpen(photos.indexOf(p))
  })))));
}
Object.assign(window, {
  WorkGallery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WorkGallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function App() {
  const [lb, setLb] = React.useState(null); // lightbox index or null
  const scrollRef = React.useRef(null);
  const [active, setActive] = React.useState("top");
  const onNav = id => {
    const el = scrollRef.current;
    if (!el) return;
    if (id === "top") {
      el.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setActive("top");
      return;
    }
    const target = el.querySelector("#" + id);
    if (target) {
      el.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
      setActive(id);
    }
  };
  const photos = window.PHOTOS;
  const open = i => setLb(i);
  const close = () => setLb(null);
  const prev = () => setLb(i => (i + photos.length - 1) % photos.length);
  const next = () => setLb(i => (i + 1) % photos.length);

  // reveal-on-scroll
  React.useEffect(() => {
    const els = document.querySelectorAll(".section, .hero__inner");
    els.forEach(e => e.classList.add("reveal"));
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) en.target.classList.add("is-in");
      });
    }, {
      threshold: 0.12,
      root: scrollRef.current
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Nav, {
    onNav: onNav,
    active: active
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-scroll",
    ref: scrollRef,
    style: {
      height: "100vh",
      overflowY: "auto",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(WorkGallery, {
    onOpen: open
  }), /*#__PURE__*/React.createElement(AboutBooking, null), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  })), lb != null && /*#__PURE__*/React.createElement(Lightbox, {
    index: lb,
    onClose: close,
    onPrev: prev,
    onNext: next
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Demo portfolio data. Imagery is placeholder (curated stock) — replace with
// Julian's real work. Span classes drive the editorial masonry rhythm.
window.PHOTOS = [{
  id: "p1",
  src: "../../assets/photos/soccer-04.jpg",
  cat: "soccer",
  catLabel: "Soccer",
  title: "Friday Night Lights",
  span: "gi--wide",
  exif: {
    camera: "Canon EOS R3",
    lens: "RF 70-200mm",
    aperture: "f/2.8",
    shutter: "1/1000s",
    iso: 3200
  }
}, {
  id: "p2",
  src: "../../assets/photos/soccer-01.jpg",
  cat: "soccer",
  catLabel: "Soccer",
  title: "First Touch",
  span: "gi",
  exif: {
    camera: "Canon EOS R3",
    lens: "RF 400mm",
    aperture: "f/2.8",
    shutter: "1/2000s",
    iso: 800
  }
}, {
  id: "p3",
  src: "../../assets/photos/gym-02.jpg",
  cat: "training",
  catLabel: "Training",
  title: "Raw Power",
  span: "gi gi--tall",
  exif: {
    camera: "Sony A1",
    lens: "24-70mm GM",
    aperture: "f/2",
    shutter: "1/640s",
    iso: 1600
  }
}, {
  id: "p4",
  src: "../../assets/photos/football-02.jpg",
  cat: "soccer",
  catLabel: "Soccer",
  title: "The Finish",
  span: "gi",
  exif: {
    camera: "Canon EOS R3",
    lens: "RF 300mm",
    aperture: "f/4",
    shutter: "1/2500s",
    iso: 640
  }
}, {
  id: "p5",
  src: "../../assets/photos/run-01.jpg",
  cat: "track",
  catLabel: "Track",
  title: "First Light",
  span: "gi--wide gi--short",
  exif: {
    camera: "Nikon Z9",
    lens: "70-200mm",
    aperture: "f/2.8",
    shutter: "1/1600s",
    iso: 400
  }
}, {
  id: "p6",
  src: "../../assets/photos/tennis-01.jpg",
  cat: "court",
  catLabel: "Tennis",
  title: "The Serve",
  span: "gi gi--tall",
  exif: {
    camera: "Sony A9 III",
    lens: "400mm GM",
    aperture: "f/2.8",
    shutter: "1/3200s",
    iso: 500
  }
}, {
  id: "p7",
  src: "../../assets/photos/basket-01.jpg",
  cat: "court",
  catLabel: "Basketball",
  title: "Nothing But Net",
  span: "gi",
  exif: {
    camera: "Canon EOS R3",
    lens: "RF 24-70mm",
    aperture: "f/2.8",
    shutter: "1/1000s",
    iso: 5000
  }
}, {
  id: "p8",
  src: "../../assets/photos/football-01.jpg",
  cat: "cycling",
  catLabel: "Cycling",
  title: "Breakaway",
  span: "gi",
  exif: {
    camera: "Nikon Z9",
    lens: "24-120mm",
    aperture: "f/5.6",
    shutter: "1/1250s",
    iso: 200
  }
}, {
  id: "p9",
  src: "../../assets/photos/gym-01.jpg",
  cat: "training",
  catLabel: "Training",
  title: "Endurance",
  span: "gi--wide",
  exif: {
    camera: "Sony A1",
    lens: "16-35mm GM",
    aperture: "f/4",
    shutter: "1/500s",
    iso: 2000
  }
}, {
  id: "p10",
  src: "../../assets/photos/soccer-03.jpg",
  cat: "soccer",
  catLabel: "Soccer",
  title: "Under Pressure",
  span: "gi",
  exif: {
    camera: "Canon EOS R5",
    lens: "RF 100mm Macro",
    aperture: "f/3.2",
    shutter: "1/800s",
    iso: 400
  }
}, {
  id: "p11",
  src: "../../assets/photos/soccer-02.jpg",
  cat: "soccer",
  catLabel: "Soccer",
  title: "Kit Out",
  span: "gi",
  exif: {
    camera: "Canon EOS R5",
    lens: "RF 35mm",
    aperture: "f/1.8",
    shutter: "1/1250s",
    iso: 200
  }
}, {
  id: "p12",
  src: "../../assets/photos/action-01.jpg",
  cat: "soccer",
  catLabel: "Soccer",
  title: "Kickoff",
  span: "gi",
  exif: {
    camera: "Nikon Z8",
    lens: "50mm f/1.8",
    aperture: "f/2.5",
    shutter: "1/2000s",
    iso: 320
  }
}];
window.CATEGORIES = [{
  id: "all",
  label: "All"
}, {
  id: "soccer",
  label: "Soccer"
}, {
  id: "training",
  label: "Training"
}, {
  id: "court",
  label: "Court"
}, {
  id: "track",
  label: "Track"
}, {
  id: "cycling",
  label: "Cycling"
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide-style line icons (2.2px stroke) used across the website kit.
const S = (paths, vb = "0 0 24 24") => function Icon({
  size = 20,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: vb,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), paths);
};
window.Icons = {
  ChevronLeft: S(/*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })),
  ChevronRight: S(/*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })),
  ArrowRight: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))),
  ArrowUpRight: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 7 17 7 17 17"
  }))),
  X: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))),
  Heart: S(/*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
  })),
  Download: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }))),
  Share: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8.6",
    y1: "13.5",
    x2: "15.4",
    y2: "17.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15.4",
    y1: "6.5",
    x2: "8.6",
    y2: "10.5"
  }))),
  Instagram: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  }))),
  Mail: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-10 6L2 7"
  }))),
  Menu: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }))),
  Camera: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "3.5"
  })))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CategoryFilter = __ds_scope.CategoryFilter;

__ds_ns.ExifBar = __ds_scope.ExifBar;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

})();
