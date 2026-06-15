// gallery.jsx — filterable Selected Work gallery (3 layout variants) + lightbox.
const { useState: gUseState, useEffect: gUseEffect, useCallback } = React;

/* ---------- Lightbox ---------- */
function JPLightbox({ photos, index, onClose, onNav }) {
  const D = window.jpDs();
  const { IconButton, Tag, ExifBar } = D;
  const { ChevronLeft, ChevronRight, X, Heart, Share, Maximize } = window;
  const [liked, setLiked] = gUseState(false);
  const photo = photos[index];

  gUseEffect(() => {
    setLiked(false);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNav(1);
      else if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [index, photos]);

  if (!photo) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__close">
        {IconButton && <IconButton label="Close" variant="glass" size="lg" onClick={onClose}><X/></IconButton>}
      </div>
      <div className="lightbox__nav lightbox__nav--prev">
        {IconButton && <IconButton label="Previous photo" variant="glass" size="lg" onClick={(ev)=>{ev.stopPropagation();onNav(-1);}}><ChevronLeft/></IconButton>}
      </div>
      <div className="lightbox__nav lightbox__nav--next">
        {IconButton && <IconButton label="Next photo" variant="glass" size="lg" onClick={(ev)=>{ev.stopPropagation();onNav(1);}}><ChevronRight/></IconButton>}
      </div>

      <div className="lightbox__stage" onClick={(ev)=>ev.stopPropagation()}>
        <div className="lightbox__imgwrap">
          <img className="lightbox__img" key={photo.id} src={photo.src} alt="" />
        </div>
        <div className="lightbox__exif">
          <div className="lightbox__actions">
            {IconButton && <IconButton label={liked?"Liked":"Like"} variant={liked?"solid":"outline"} onClick={()=>setLiked(v=>!v)}
              style={liked?{color:'#fff'}:undefined}><Heart fill={liked?"currentColor":"none"}/></IconButton>}
            {IconButton && <IconButton label="Share" variant="outline"><Share/></IconButton>}
          </div>
          <span className="lightbox__count">{String(index+1).padStart(2,"0")} / {String(photos.length).padStart(2,"0")}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Gallery: sport windows → click into a sport album ---------- */
const SPORT_COVERS = {
  Football:   "assets/fb/DSC02912.jpg",
  Soccer:     "assets/soc/DSC09443.jpg",
  Gymnastics: "assets/gym/DSC01888.jpg",
};

function JPGallery() {
  const D = window.jpDs();
  const { Eyebrow, PhotoCard } = D;
  const { ChevronLeft, ArrowRight } = window;
  const PHOTOS = (window.JPDATA && window.JPDATA.PHOTOS) || [];
  const CATS = (window.JPDATA && window.JPDATA.CATS) || [];
  const [album, setAlbum] = gUseState(null);
  const [open, setOpen] = gUseState(-1);

  const sports = CATS.filter(c => c.id !== "all").map(c => ({
    ...c,
    count: PHOTOS.filter(p => p.cat === c.id).length,
    cover: SPORT_COVERS[c.id] || (PHOTOS.find(p => p.cat === c.id) || {}).src,
  }));

  const albumPhotos = album ? PHOTOS.filter(p => p.cat === album) : [];
  const nav = (dir) => setOpen(i => (i + dir + albumPhotos.length) % albumPhotos.length);

  const goWork = () => {
    const el = document.getElementById("work");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: "smooth" });
  };
  const openAlbum = (id) => { setAlbum(id); requestAnimationFrame(goWork); };

  // Esc backs out of an album (when the lightbox is closed)
  gUseEffect(() => {
    if (!album) return;
    const onKey = (e) => { if (e.key === "Escape" && open < 0) setAlbum(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [album, open]);

  return (
    <section id="work" className="section reveal">
      {!album ? (
        <React.Fragment>
          <div className="section__head">
            <div>
              {Eyebrow && <Eyebrow rule>Selected Work</Eyebrow>}
              <h2 className="section__title">The Work</h2>
            </div>
            <p className="section__lead">Every game I've shot, sorted by sport. Pick a field for the full set.</p>
          </div>
          <div className="gallery gallery--uniform sportgrid">
            {sports.map((s, i) => (
              <div className="gcell" key={s.id} style={{ "--d": i * 70 + "ms" }}>
                {PhotoCard && (
                  <PhotoCard src={s.cover} title={s.label} aspect="4/5"
                    onClick={() => openAlbum(s.id)} role="button"
                    onKeyDown={(ev)=>{ if(ev.key==="Enter"||ev.key===" "){ ev.preventDefault(); openAlbum(s.id);} }}>
                    <span className="sportcard__count">
                      View
                      <span className="sportcard__arrow">{ArrowRight && <ArrowRight size={15} />}</span>
                    </span>
                  </PhotoCard>
                )}
              </div>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="section__head album__head">
            <div>
              <button type="button" className="album__back" onClick={() => setAlbum(null)}>
                <span className="album__backicon">{ChevronLeft && <ChevronLeft size={16} />}</span>
                All Sports
              </button>
              <h2 className="section__title">{album}</h2>
            </div>
            <span className="album__count">{albumPhotos.length} frame{albumPhotos.length === 1 ? "" : "s"}</span>
          </div>
          <div className="gallery gallery--uniform">
            {albumPhotos.map((p, i) => (
              <div className="gcell" key={p.id} style={{ "--d": (i % 8) * 45 + "ms" }}>
                {PhotoCard && (
                  <PhotoCard
                    src={p.src} aspect="4/5"
                    onClick={() => setOpen(i)} role="button"
                    onKeyDown={(ev)=>{ if(ev.key==="Enter"||ev.key===" "){ ev.preventDefault(); setOpen(i);} }}
                  />
                )}
              </div>
            ))}
          </div>
        </React.Fragment>
      )}

      {open >= 0 && albumPhotos[open] && ReactDOM.createPortal(
        <JPLightbox photos={albumPhotos} index={open} onClose={() => setOpen(-1)} onNav={nav} />,
        document.body
      )}
    </section>
  );
}

Object.assign(window, { JPGallery, JPLightbox });
