// app.jsx — composes the site, wires Tweaks, runs scroll-reveal.
const { useEffect: aUseEffect, useRef: aUseRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "anchored",
  "accent": "#0070ff",
  "parallax": true,
  "headline": "In The Frame",
  "typeface": "stadium"
}/*EDITMODE-END*/;

// Swappable type systems — each sets the display / body / label families site-wide
// (applied to <html> so the portaled lightbox inherits them too).
const FONT_SETS = {
  stadium:   { label:"Stadium",     display:"'Anton', 'Saira Condensed', 'Arial Narrow', sans-serif", body:"'Manrope', system-ui, sans-serif",   mono:"'IBM Plex Mono', ui-monospace, monospace" },
  touchline: { label:"Touchline",   display:"'Oswald', 'Saira Condensed', 'Arial Narrow', sans-serif", body:"'Work Sans', system-ui, sans-serif", mono:"'Space Mono', ui-monospace, monospace" },
  modern:    { label:"Modern",      display:"'Sora', system-ui, sans-serif",                          body:"'Sora', system-ui, sans-serif",      mono:"'Space Mono', ui-monospace, monospace" },
  original:  { label:"Original (DS)", display:"'Saira Condensed', 'Arial Narrow', sans-serif",        body:"'Archivo', system-ui, sans-serif",   mono:"'JetBrains Mono', ui-monospace, monospace" },
};
const TYPE_OPTIONS = Object.keys(FONT_SETS).map((k) => ({ value: k, label: FONT_SETS[k].label }));

// accent value -> hover/press companions (kept inside the brand blue ramp)
const ACCENT_MAP = {
  "#0070ff": { hover:"#2e8bff", press:"#0056c4" }, // Electric (brand)
  "#2e8bff": { hover:"#5d9dff", press:"#0070ff" }, // Floodlight (brighter)
  "#0056c4": { hover:"#0070ff", press:"#003f93" }, // Cobalt (deeper)
};

function useReveal() {
  aUseEffect(() => {
    const reveal = (e) => { if (!e.hasAttribute("data-rise")) e.setAttribute("data-rise", "1"); };
    const inView = (e) => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = e.getBoundingClientRect();
      return r.top < vh * 0.9 && r.bottom > vh * 0.04;
    };
    const check = () => {
      document.querySelectorAll(".reveal:not([data-rise])").forEach((e) => { if (inView(e)) reveal(e); });
    };
    check();
    const onScroll = () => check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  });
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const {
    JPNav: Nav, JPHero: Hero, JPMarquee: Marquee, JPGallery: Gallery,
    JPServices: Services, JPAbout: About, JPBookingForm: BookingForm, JPFooter: Footer,
    TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, TweakText, TweakSelect,
  } = window;

  useReveal();

  // Apply the chosen typeface site-wide (on <html> so the portaled lightbox inherits it).
  aUseEffect(() => {
    const f = FONT_SETS[t.typeface] || FONT_SETS.stadium;
    const r = document.documentElement.style;
    r.setProperty("--font-display", f.display);
    r.setProperty("--font-body", f.body);
    r.setProperty("--font-mono", f.mono);
  }, [t.typeface]);

  const acc = ACCENT_MAP[t.accent] || ACCENT_MAP["#0070ff"];
  const rootStyle = {
    "--accent": t.accent,
    "--accent-hover": acc.hover,
    "--accent-press": acc.press,
    "--border-accent": t.accent,
  };

  return (
    <div className="site" style={rootStyle}>
      <Nav />
      <Hero layout={t.heroLayout} parallax={t.parallax} headline={t.headline} />
      <Marquee />
      <Gallery />
      <Services />
      <About />
      <BookingForm />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Layout" value={t.heroLayout}
          options={[{value:"anchored",label:"Anchored"},{value:"centered",label:"Centered"},{value:"split",label:"Split"}]}
          onChange={(v)=>setTweak("heroLayout", v)} />
        <TweakToggle label="Parallax motion" value={t.parallax} onChange={(v)=>setTweak("parallax", v)} />
        <TweakText label="Headline" value={t.headline} onChange={(v)=>setTweak("headline", v)} />

        <TweakSection label="Accent" />
        <TweakColor label="Floodlight" value={t.accent}
          options={["#0070ff","#2e8bff","#0056c4"]}
          onChange={(v)=>setTweak("accent", v)} />

        <TweakSection label="Typeface" />
        <TweakSelect label="Font system" value={t.typeface}
          options={TYPE_OPTIONS}
          onChange={(v)=>setTweak("typeface", v)} />
      </TweaksPanel>
    </div>
  );
}

function mountWhenReady() {
  const ns = window.PantaleoneSportsPhotoDesignSystem_6cf8d9;
  if (!ns || !window.React || !window.ReactDOM || !window.useTweaks || !window.JPGallery || !window.JPBookingForm) {
    setTimeout(mountWhenReady, 40); return;
  }
  ReactDOM.createRoot(document.getElementById("app")).render(<App />);
}
mountWhenReady();

// React-independent safety net: drives the scroll-reveal via a [data-rise]
// attribute (which React never resets), and guarantees content is never left
// hidden even if scroll events / rAF are throttled.
(function revealSafetyNet() {
  const start = Date.now();
  const inView = (e) => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const r = e.getBoundingClientRect();
    return r.top < vh * 0.9 && r.bottom > vh * 0.04;
  };
  const iv = setInterval(() => {
    const els = document.querySelectorAll(".reveal:not([data-rise])");
    const grace = Date.now() - start > 2200; // after 2.2s, reveal everything
    els.forEach((e) => { if (grace || inView(e)) e.setAttribute("data-rise", "1"); });
    if (Date.now() - start > 12000) clearInterval(iv);
  }, 200);
})();
