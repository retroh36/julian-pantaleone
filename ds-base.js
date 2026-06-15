// ds-base.js — loads the Pantaleone Sports Photography design system bundle.
// base points at the bound _ds/<folder> tree relative to this page (project root).
(() => {
  const base = "_ds/pantaleone-sports-photo-design-system-6cf8d9fb-716f-4b78-932a-5e04a8c359b9";
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = base + "/styles.css";
  document.head.appendChild(l);
  const s = document.createElement("script");
  s.src = base + "/_ds_bundle.js";
  s.onerror = () => console.error("ds-base.js: failed to load " + s.src);
  document.head.appendChild(s);
})();
