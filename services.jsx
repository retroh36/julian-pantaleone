// services.jsx — Services / packages section.
function JPServices() {
  const D = window.jpDs();
  const { Eyebrow, Button, Tag } = D;
  const SERVICES = (window.JPDATA && window.JPDATA.SERVICES) || [];
  const goBook = () => {
    const el = document.getElementById("book");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior:"smooth" });
  };
  return (
    <section id="services" className="section reveal">
      <div className="section__head">
        <div>
          {Eyebrow && <Eyebrow rule>What I Shoot</Eyebrow>}
          <h2 className="section__title">Book The Work</h2>
        </div>
        <p className="section__lead">Three ways in. Every package is delivered colour-graded, full-res, and ready for print or the timeline.</p>
      </div>

      <div className="services">
        {SERVICES.map(s => {
          const IconCmp = window[s.icon];
          return (
            <article className={"svc" + (s.featured ? " svc--featured" : "")} key={s.id}>
              {s.featured && <span className="svc__flag">Most booked</span>}
              <div className="svc__top">
                <span className="svc__icon">{IconCmp && <IconCmp size={22} />}</span>
                <span className="svc__price">{s.price}</span>
              </div>
              <h3 className="svc__name">{s.name}</h3>
              <p className="svc__blurb">{s.blurb}</p>
              <ul className="svc__points">
                {s.points.map((pt,i)=>(
                  <li key={i}><span className="svc__check">{window.Check && <window.Check size={15}/>}</span>{pt}</li>
                ))}
              </ul>
              {Button && (
                <Button variant={s.featured ? "primary" : "secondary"} size="md" block
                  athletic={s.featured} onClick={goBook}>
                  {s.featured ? "Book This" : "Enquire"}
                </Button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

Object.assign(window, { JPServices });
