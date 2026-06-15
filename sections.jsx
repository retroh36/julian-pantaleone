// sections.jsx — Nav, Hero (3 layout variants), Marquee, About+Stats, Footer.
const { useState, useEffect, useRef } = React;

function jpDs() { return window.PantaleoneSportsPhotoDesignSystem_6cf8d9 || {}; }

/* ---------- scroll position hook ---------- */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setY(window.scrollY || 0); raf = null; });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

/* ---------- Nav ---------- */
function JPNav() {
  const { Logo, Button } = jpDs();
  const y = useScrollY();
  const scrolled = y > 40;
  const [active, setActive] = useState("work");
  const links = [
    { id:"work", label:"Work" },
    { id:"services", label:"Services" },
    { id:"about", label:"About" },
    { id:"book", label:"Book" },
  ];
  const go = (e, id) => {
    e.preventDefault();
    setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior:"smooth" });
  };
  return (
    <nav className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      {Logo ? <Logo variant="wordmark" theme="light" assetBase="assets/" height={112} href="#top" /> : <span style={{color:'#fff'}}>JP</span>}
      <div className="nav__right">
        <div className="nav__links">
          {links.map(l => (
            <a key={l.id} href={"#"+l.id} onClick={(e)=>go(e,l.id)}
               className={"nav__link" + (active===l.id ? " nav__link--active":"")}>{l.label}</a>
          ))}
        </div>
        {Button && <Button variant="primary" size="sm" athletic
          onClick={(e)=>go(e,"book")}>Book a Shoot</Button>}
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function JPHero({ layout = "anchored", parallax = true, headline = "In The Frame" }) {
  const { Eyebrow, Button } = jpDs();
  const y = useScrollY();
  const p = parallax ? Math.min(y, 900) : 0;
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior:"smooth" });
  };
  // split the headline so the last word gets the slant accent
  const words = headline.trim().split(/\s+/);
  const last = words.pop();
  const head = (
    <h1 className="hero__title">
      {words.join(" ")} <em>{last}</em>
    </h1>
  );
  const cta = (
    <div className="hero__cta">
      {Button && <Button variant="primary" size="lg" athletic onClick={()=>go("work")}>Enter the Portfolio</Button>}
      {Button && <Button variant="secondary" size="lg" onClick={()=>go("book")}>Book a Shoot</Button>}
    </div>
  );

  return (
    <header id="top" className={"hero hero--" + layout}>
      <div className="hero__media" style={{ transform: `translate3d(0, ${p * 0.35}px, 0) scale(${1 + p * 0.0004})` }}>
        <img className="hero__img" src="assets/real/hero-catch.jpg" alt="Receiver hauling in a touchdown under the lights" />
      </div>
      <div className="hero__scrim" />
      <div className="hero__glow" style={{ transform:`translate3d(0, ${p*0.15}px, 0)`, opacity: parallax ? Math.max(0, .7 - p/900) : .7 }} />
      <div className="hero__inner" style={{ opacity: parallax ? Math.max(0, 1 - p/620) : 1, transform:`translate3d(0, ${p*-0.06}px, 0)` }}>
        {Eyebrow && <Eyebrow rule>Sports Photography</Eyebrow>}
        {head}
        <p className="hero__sub">I shoot the moments other people miss — the energy of the play, frozen the instant it tips.</p>
        {cta}
      </div>
      <div className="hero__scrollcue">
        <span>Scroll</span>
        <div className="hero__scrollline" />
      </div>
    </header>
  );
}

/* ---------- Marquee strip ---------- */
function JPMarquee() {
  const items = (window.JPDATA && window.JPDATA.MARQUEE) || [];
  const row = items.concat(items);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span className="marquee__item" key={i}>
            <span className="marquee__dot" />{t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- About + Stats ---------- */
function JPAbout() {
  const { Eyebrow } = jpDs();
  const STATS = (window.JPDATA && window.JPDATA.STATS) || [];
  return (
    <section id="about" className="section reveal">
      <div className="about">
        <div className="about__copy">
          {Eyebrow && <Eyebrow rule>The Photographer</Eyebrow>}
          <h2 className="section__title">Ten Seasons<br/>On The Touchline</h2>
          <p>I've spent a decade learning where the next moment is going to happen — the half-second before the goal, the breath before the gun. I shoot fast glass wide open so the athlete reads sharp and the crowd melts to colour.</p>
          <p>Based wherever the fixture is. I work clubs, schools, federations and the athletes building their own highlight reel. If it moves, I can freeze it.</p>
          <div className="about__stats">
            {STATS.map((s,i)=>(
              <div className="stat" key={i}>
                <div className="stat__num">{s.num}<em>{s.suffix}</em></div>
                <div className="stat__lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about__photo">
          <img src="assets/real/about-23.jpg" alt="Running back in a gold helmet on the sideline" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function JPFooter() {
  const { Logo, IconButton } = jpDs();
  const { Instagram, Twitter, Mail } = window;
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          {Logo ? <Logo variant="lockup" theme="light" assetBase="assets/" height={30} href="#top" /> : null}
          <p className="footer__tag">Sports photography that keeps the energy of the moment.</p>
        </div>
        <div className="footer__right">
          <div className="footer__socials">
            {IconButton && <IconButton label="Instagram" variant="ghost"><Instagram/></IconButton>}
            {IconButton && <IconButton label="Twitter" variant="ghost"><Twitter/></IconButton>}
            {IconButton && <IconButton label="Email" variant="ghost"><Mail/></IconButton>}
          </div>
          <div className="footer__copy">© 2026 Julian Pantaleone · All frames protected</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { JPNav, JPHero, JPMarquee, JPAbout, JPFooter, useJPScrollY: useScrollY, jpDs });
