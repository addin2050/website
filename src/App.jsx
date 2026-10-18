import { useEffect, useRef, useState } from 'react';
import {
  profile, highlights, stats, ticker, services, certSkills, philosophy, process, buildTypes, projects,
  experience, education, certifications, logLines, logoFor,
} from './data.js';

const NAV = [
  ['Home', '#home'],
  ['Philosophy', '#philosophy'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Certifications', '#certifications'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, className = '' }) {
  const [ref, shown] = useReveal();
  return <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`}>{children}</div>;
}

function Counter({ value, suffix }) {
  const [ref, shown] = useReveal();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function SectionHead({ num, title, sub }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{num}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

function TalkModal({ onClose }) {
  const [mode, setMode] = useState('call');
  const wa = mode === 'wa';
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="card modal" role="dialog" aria-modal="true" aria-label="Let's talk" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="Close">×</button>
        <h3>Let's talk</h3>
        <div className="tabs" role="tablist">
          <button role="tab" aria-selected={!wa} className={!wa ? 'on' : ''} onClick={() => setMode('call')}>Call</button>
          <button role="tab" aria-selected={wa} className={wa ? 'on' : ''} onClick={() => setMode('wa')}>WhatsApp</button>
        </div>
        <p className="muted small">{wa ? 'Scan to open a WhatsApp chat with me.' : 'Scan with your phone camera to call me.'}</p>
        <img src={wa ? '/whatsapp-qr.svg' : '/call-qr.svg'} alt={`QR code for ${wa ? 'WhatsApp chat' : 'calling'} ${profile.phone}`} width="220" height="220" />
        {wa
          ? <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          : <a className="btn" href={`tel:${profile.phoneLink}`}>Call {profile.phone}</a>}
        <a className="small muted" href="#contact" onClick={onClose}>Or send a message</a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [talk, setTalk] = useState(false);
  return (
    <header className="header">
      <div className="container header-in">
        <a href="#home" className="logo"><span>AS</span> Abi Sarasan</a>
        <nav className={open ? 'open' : ''}>
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <button className="btn btn-sm hide-sm" onClick={() => setTalk(true)}>Let's Talk</button>
        {talk && <TalkModal onClose={() => setTalk(false)} />}
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="badge"><i /> Senior IT Administrator · Open to work</span>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.intro}</p>
          <ul className="highlights">
            {highlights.map(([k, v]) => (
              <li key={k}><b>{k}:</b> {v}</li>
            ))}
          </ul>
          <div className="cta">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="/Abi-Sarasan-CV.pdf" download>Download CV</a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <ProfileCard />
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <aside className="card profile-card">
      <span className="float tl"><b>▸</b>Make AI work and deliver what you want</span>
      <span className="float br"><b>✓</b>12+ yrs enterprise IT</span>
      <img className="avatar" src="/abi.jpg" alt="Abi Sarasan" width="132" height="132" />
      <h3>{profile.name}</h3>
      <a className="phone" href={`tel:${profile.phoneLink}`}>{profile.phone}</a>
      <a className="phone email" href={`mailto:${profile.email}`}>{profile.email}</a>
      <p className="muted">{profile.role}</p>
      <p className="muted small">{profile.location}</p>
      <ul className="chips">
        <li>Hybrid Entra ID</li><li>Intune</li><li>Microsoft 365</li><li>n8n + Claude</li>
      </ul>
    </aside>
  );
}

function Terminal() {
  const [shown, setShown] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    if (shown >= logLines.length) { setRunning(false); return; }
    const t = setTimeout(() => setShown((s) => s + 1), 650);
    return () => clearTimeout(t);
  }, [running, shown]);
  const run = () => { setShown(0); setRunning(true); };
  return (
    <section className="container terminal-wrap">
      <Reveal>
        <div className="card terminal">
          <div className="term-bar">
            <span className="eyebrow">Agentic website security scan · demo</span>
            <button className="btn btn-sm" onClick={run} disabled={running}>
              {running ? 'Scanning…' : 'Run agentic scan'}
            </button>
          </div>
          <pre aria-live="polite">
            {logLines.slice(0, shown).map(([lvl, msg], i) => (
              <div key={i}><b className={`lvl ${lvl}`}>[{lvl}]</b> {msg}</div>
            ))}
            {shown === 0 && <div className="muted">$ press run to simulate an n8n + Claude website header scan (sample data, not a live scan)</div>}
          </pre>
        </div>
      </Reveal>
    </section>
  );
}

function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">{items.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead num="01" title="Capabilities" sub="Traditional infrastructure strength combined with automation and AI." />
        <div className="grid g3">
          {services.map((s) => (
            <Reveal key={s.n}>
              <div className="card hover">
                <span className="num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><h3 className="sub-head">Certified skills</h3></Reveal>
        <div className="grid g3">
          {certSkills.map((g) => (
            <Reveal key={g.area}>
              <div className="card hover">
                <span className="num">{g.area}</span>
                <ul className="chips">{g.skills.map((k) => <li key={k}>{k}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section alt">
      <div className="container">
        <SectionHead num="02" title="How I work" />
        <div className="grid g3">
          {process.map((p) => (
            <Reveal key={p.n}>
              <div className="step">
                <span className="step-n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><h3 className="sub-head">What I build</h3></Reveal>
        <div className="grid g4">
          {buildTypes.map((b) => (
            <Reveal key={b.title}>
              <div className="card hover">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayVideo() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  useEffect(() => { if (playing && ref.current) ref.current.play().catch(() => {}); }, [playing]);
  return (
    <figure className="intro-video">
      {playing ? (
        <video ref={ref} src="/abi-intro.mp4" controls playsInline />
      ) : (
        <button className="video-poster" onClick={() => setPlaying(true)} aria-label="Play video: Abi's philosophy on AI and automation">
          <img src="/abi.jpg" alt="" />
          <span className="play">▶</span>
        </button>
      )}
      <figcaption className="small muted">Press play: Abi on AI and automation</figcaption>
    </figure>
  );
}

function Philosophy() {
  const p = philosophy;
  return (
    <section id="philosophy" className="section">
      <div className="container">
        <SectionHead num="03" title="Philosophy" sub={p.intro} />
        <div className="phil-top">
          <Reveal><blockquote className="quote">“{p.quote}”</blockquote></Reveal>
          <Reveal><PlayVideo /></Reveal>
        </div>
        <div className="grid g4">
          {p.principles.map((x) => (
            <Reveal key={x.title}>
              <div className="card hover">
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><h3 className="sub-head">How 20X is achievable</h3></Reveal>
        <Reveal>
          <div className="card ladder">
            {p.steps.map((st) => (
              <div className="rung" key={st.label}>
                <div className="rung-top"><span>{st.label}</span><b>{st.factor}</b></div>
                <div className="bar"><i style={{ width: st.width + '%' }} /></div>
                <p className="small muted">{st.text}</p>
              </div>
            ))}
            <p className="small muted note">{p.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead num="04" title="Selected work" />
        <div className="grid g2x2">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="card hover project">
                <span className="eyebrow">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="chips">{p.tools.map((t) => <li key={t}>{t}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <SectionHead num="05" title="Experience" />
        <div className="timeline">
          {experience.map((e) => (
            <Reveal key={e.company + e.period}>
              <div className="t-item">
                <div className="t-meta">
                  <span className="mono">{e.period}</span>
                  <span className="muted small">{e.place}</span>
                </div>
                <div className="card">
                  <h3>{e.role}</h3>
                  <p className="company">{e.company}</p>
                  <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHead num="06" title="Certifications" sub="Credentials and badges that back up the hands-on work." />
        <div className="grid g3">
          {certifications.map((c) => (
            <Reveal key={c.name}>
              <div className="card hover cert">
                <span className="logo-box">
                  {logoFor(c.issuer)
                    ? <img src={logoFor(c.issuer)} alt={`${c.issuer} logo`} loading="lazy" />
                    : <b>{c.issuer.replace(/\(.*?\)/g, '').replace(/[^A-Za-z0-9 ]/g, '').trim().split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}</b>}
                </span>
                <div>
                  <h3>{c.name}</h3>
                  <p className="small">{c.issuer}</p>
                  <p className="small mono">
                    <span className={c.active ? 'ok' : 'exp'}>{c.active ? '✓' : '○'}</span> {c.date}{c.id ? ` · ID ${c.id}` : ''}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section alt">
      <div className="container grid g2">
        <Reveal>
          <span className="eyebrow">07</span>
          <h2>About</h2>
          {profile.about.map((p) => <p key={p} className="lead-sm">{p}</p>)}
        </Reveal>
        <Reveal>
          <div className="card">
            <h3>Education</h3>
            {education.map((e) => (
              <p key={e.school} className="edu">
                <strong>{e.degree}</strong><br />
                {e.school} · <span className="mono">{e.years}</span><br />
                <span className="muted small">{e.detail}</span>
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const WEBHOOK = import.meta.env.VITE_CONTACT_WEBHOOK;

function ContactForm() {
  const [state, setState] = useState('idle');
  const submit = async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    if (f.get('website')) return; // honeypot
    setState('sending');
    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.get('name'), email: f.get('email'), message: f.get('message'), source: 'portfolio',
        }),
      });
      if (!res.ok) throw new Error(res.status);
      setState('sent');
      e.target.reset();
    } catch {
      setState('error');
    }
  };
  if (!WEBHOOK) return null;
  return (
    <form className="card form" onSubmit={submit}>
      <input name="name" placeholder="Your name" required maxLength={80} />
      <input name="email" type="email" placeholder="Your email" required maxLength={120} />
      <textarea name="message" placeholder="How can I help?" required rows={4} maxLength={2000} />
      <input name="website" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message'}</button>
      <p className="small" role="status">
        {state === 'sent' && 'Thanks! Check your inbox for an automatic confirmation. I will reply soon.'}
        {state === 'error' && 'Something went wrong. Please email me directly.'}
      </p>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <Reveal>
          <span className="eyebrow">08</span>
          <h2>Let's make it happen</h2>
          <p className="lead-sm">Open to Senior IT and infrastructure roles in Dubai, on-site or hybrid.</p>
          <div className="cta center">
            <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn btn-ghost" href={`tel:${profile.phoneLink}`}>Call {profile.phone}</a>
            <a className="btn btn-ghost" href="/Abi-Sarasan-CV.pdf" download>Download CV</a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container qr">
        <img src="/call-qr.svg" alt={`QR code that calls ${profile.phone}`} width="140" height="140" />
        <div>
          <h3>Scan to call me</h3>
          <p className="muted small">Point your phone camera at the code to dial {profile.phone}.</p>
        </div>
      </div>
      <div className="container footer-in">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span className="muted">{profile.location}</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <div className="status-pill"><i /> 12+ years across UAE, KSA and Singapore</div>
      <main>
        <Hero />
        <Terminal />
        <Ticker />
        <Services />
        <Process />
        <Philosophy />
        <Projects />
        <Experience />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
