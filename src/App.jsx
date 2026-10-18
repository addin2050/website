import { useEffect, useRef, useState } from 'react';
import {
  profile, stats, ticker, services, process, projects,
  experience, education, certifications, logLines,
} from './data.js';

const NAV = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
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

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-in">
        <a href="#home" className="logo"><span>AS</span> Abi Sarasan</a>
        <nav className={open ? 'open' : ''}>
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <a href="#contact" className="btn btn-sm hide-sm">Let's Talk</a>
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
          <span className="badge"><i /> Open to work · Dubai, On-site / Hybrid</span>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.intro}</p>
          <div className="cta">
            <a className="btn" href="#projects">View Projects</a>
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
      <div className="avatar">AS</div>
      <h3>{profile.name}</h3>
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
    const t = setTimeout(() => setShown((s) => s + 1), 700);
    return () => clearTimeout(t);
  }, [running, shown]);
  const run = () => { setShown(0); setRunning(true); };
  return (
    <section className="container terminal-wrap">
      <Reveal>
        <div className="card terminal">
          <div className="term-bar">
            <span className="eyebrow">Agentic security response · demo</span>
            <button className="btn btn-sm" onClick={run} disabled={running}>
              {running ? 'Running…' : 'Run workflow simulation'}
            </button>
          </div>
          <pre aria-live="polite">
            {logLines.slice(0, shown).map(([lvl, msg], i) => (
              <div key={i}><b className={`lvl ${lvl}`}>[{lvl}]</b> {msg}</div>
            ))}
            {shown === 0 && <div className="muted">$ press run to simulate an n8n + Claude triage flow (sample data)</div>}
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
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead num="03" title="Selected work" />
        <div className="grid g3">
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
        <SectionHead num="04" title="Experience" />
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

function About() {
  return (
    <section id="about" className="section">
      <div className="container grid g2">
        <Reveal>
          <span className="eyebrow">05</span>
          <h2>About</h2>
          {profile.about.map((p) => <p key={p} className="lead-sm">{p}</p>)}
        </Reveal>
        <Reveal>
          <div className="card">
            <h3>Education</h3>
            {education.map((e) => (
              <p key={e.school}><strong>{e.school}</strong><br /><span className="muted">{e.detail}</span></p>
            ))}
            <h3 className="mt">Certifications & credentials</h3>
            <ul className="checks">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="container contact">
        <Reveal>
          <span className="eyebrow">06</span>
          <h2>Let's work together</h2>
          <p className="lead-sm">Open to Senior IT and infrastructure roles in Dubai, on-site or hybrid.</p>
          <div className="cta center">
            <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
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
      <main>
        <Hero />
        <Terminal />
        <Ticker />
        <Services />
        <Process />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
