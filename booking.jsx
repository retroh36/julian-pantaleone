// booking.jsx — Booking / contact form with live validation.
const { useState: bUseState } = React;

function JPBookingForm() {
  const D = window.jpDs();
  const { Eyebrow, Button, Input, Textarea } = D;
  const { Check, MapPin, Clock, Mail } = window;
  const SPORTS = ["Soccer","Basketball","Track & Field","Cycling","Tennis","Gymnastics","Training session","Other"];

  const [form, setForm] = bUseState({ name:"", email:"", sport:"", date:"", brief:"" });
  const [errors, setErrors] = bUseState({});
  const [touched, setTouched] = bUseState({});
  const [sent, setSent] = bUseState(false);

  const validate = (f) => {
    const e = {};
    if (!f.name.trim()) e.name = "Tell me who you are.";
    if (!f.email.trim()) e.email = "I'll need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "That email doesn't look right.";
    if (!f.sport) e.sport = "Pick a sport so I bring the right glass.";
    if (!f.date) e.date = "When's the shoot?";
    return e;
  };

  const set = (k, v) => {
    const next = { ...form, [k]: v };
    setForm(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => { setTouched(t=>({ ...t, [k]:true })); setErrors(validate(form)); };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    setTouched({ name:true, email:true, sport:true, date:true });
    if (Object.keys(e).length === 0) setSent(true);
  };

  return (
    <section id="book" className="section reveal">
      <div className="booking">
        <div className="booking__glow" />
        <div className="booking__inner">
          <div className="booking__intro">
            {Eyebrow && <Eyebrow rule>Get In The Frame</Eyebrow>}
            <h2 className="section__title">Book A Shoot</h2>
            <p className="booking__lead">Tell me about the event and I'll come back within a day with availability and a quote. Let's get your season on the wall.</p>
            <ul className="booking__facts">
              <li>{MapPin && <MapPin size={18}/>}<span>Travels for the fixture — anywhere it's played.</span></li>
              <li>{Clock && <Clock size={18}/>}<span>48-hour gallery turnaround, standard.</span></li>
              <li>{Mail && <Mail size={18}/>}<span>hello@pantaleone.photo</span></li>
            </ul>
          </div>

          <div className="booking__formwrap">
            {sent ? (
              <div className="booking__success">
                <span className="booking__successicon">{Check && <Check size={30}/>}</span>
                <h3>Frame requested.</h3>
                <p>Thanks, {form.name.split(" ")[0] || "there"}. I've got your {form.sport.toLowerCase()} shoot for {form.date}. Expect a reply at {form.email} within 24 hours.</p>
                {Button && <Button variant="secondary" size="md" onClick={()=>{ setSent(false); setForm({ name:"",email:"",sport:"",date:"",brief:"" }); setTouched({}); setErrors({}); }}>Book another</Button>}
              </div>
            ) : (
              <form className="booking__form" onSubmit={submit} noValidate>
                <div className="booking__row">
                  {Input && <Input label="Name" required value={form.name} placeholder="Your name"
                    onChange={(e)=>set("name", e.target.value)} onBlur={()=>blur("name")}
                    error={touched.name ? errors.name : undefined} />}
                  {Input && <Input label="Email" type="email" required value={form.email} placeholder="you@club.com"
                    onChange={(e)=>set("email", e.target.value)} onBlur={()=>blur("email")}
                    error={touched.email ? errors.email : undefined} />}
                </div>
                <div className="booking__row">
                  <div className="jp-field">
                    <label className="jp-field__label">Sport<span className="jp-field__req">*</span></label>
                    <select className={"jp-input booking__select" + (form.sport ? "" : " booking__select--empty") + (touched.sport && errors.sport ? " jp-input--invalid" : "")}
                      value={form.sport} onChange={(e)=>set("sport", e.target.value)} onBlur={()=>blur("sport")}>
                      <option value="">Select a sport…</option>
                      {SPORTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {touched.sport && errors.sport && <span className="jp-field__hint jp-field__hint--error">{errors.sport}</span>}
                  </div>
                  {Input && <Input label="Shoot date" type="date" required value={form.date}
                    onChange={(e)=>set("date", e.target.value)} onBlur={()=>blur("date")}
                    error={touched.date ? errors.date : undefined} />}
                </div>
                {Textarea && <Textarea label="The brief" rows={4} value={form.brief}
                  placeholder="Sport, venue, what matters most to capture…"
                  onChange={(e)=>set("brief", e.target.value)} />}
                {Button && <Button variant="primary" size="lg" athletic block type="submit">Request This Shoot</Button>}
                <p className="booking__fineprint">No spam, ever. Just a reply from a real photographer.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { JPBookingForm });
