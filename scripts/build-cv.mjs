// Builds public/Abi-Sarasan-CV.pdf from src/data.js using headless Chrome/Edge.
// ATS-friendly layout: single column, no photo, no tables or multi-column text, standard section headings.
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { profile, highlights, certSkills, experience, education, certifications, ticker, projects } from '../src/data.js';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(profile.name)} - ${esc(profile.role)} CV</title><style>
@page { size: A4; margin: 15mm 16mm; }
* { box-sizing: border-box; }
body { font-family: Arial, Helvetica, sans-serif; color: #000; font-size: 10pt; line-height: 1.4; margin: 0; }
h1 { font-size: 20pt; margin: 0 0 2px; }
.role { font-size: 12pt; font-weight: 700; margin: 0 0 4px; }
.contact { font-size: 9.5pt; margin: 0 0 4px; }
h2 { font-size: 11pt; text-transform: uppercase; margin: 14px 0 5px; border-bottom: 1px solid #000; padding-bottom: 2px; }
.job { margin-bottom: 9px; break-inside: avoid; }
.job-t { font-weight: 700; margin: 0; }
.job-m { margin: 0 0 2px; }
ul { margin: 2px 0 0; padding-left: 18px; }
li { margin-bottom: 1px; }
p { margin: 0 0 4px; }
</style></head><body>
<h1>${esc(profile.name)}</h1>
<p class="role">${esc(profile.role)}</p>
<p class="contact">${esc(profile.location)}</p>
<p class="contact">Phone: ${esc(profile.phone)} | Email: ${esc(profile.email)} | LinkedIn: ${esc(profile.linkedin.replace('https://www.', ''))}</p>

<h2>Professional Summary</h2>
<p>${esc(profile.intro)}</p>
${profile.about.map((p) => `<p>${esc(p)}</p>`).join('')}

<h2>Key Strengths</h2>
<ul>${highlights.map(([k, v]) => `<li>${esc(k)}: ${esc(v)}</li>`).join('')}</ul>

<h2>Core Skills</h2>
<p>${ticker.map(esc).join(', ')}</p>
${certSkills.map((g) => `<p><b>${esc(g.area)}:</b> ${g.skills.map(esc).join(', ')}</p>`).join('')}

<h2>Professional Experience</h2>
${experience.map((e) => `<div class="job">
<p class="job-t">${esc(e.role)}</p>
<p class="job-m">${esc(e.company)} | ${esc(e.place)} | ${esc(e.period)}</p>
<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul></div>`).join('')}

<h2>Projects</h2>
<ul>${projects.map((p) => `<li><b>${esc(p.title)}</b> (${esc(p.tag)}): ${esc(p.text)}</li>`).join('')}</ul>

<h2>Education</h2>
${education.map((e) => `<p><b>${esc(e.degree)}</b>, ${esc(e.school)}, ${esc(e.years)}</p>`).join('')}

<h2>Certifications</h2>
<ul>${certifications.map((c) => `<li>${esc(c.name)}, ${esc(c.issuer)} (${esc(c.date)})</li>`).join('')}</ul>
</body></html>`;

const dir = join(tmpdir(), 'cv-build');
mkdirSync(dir, { recursive: true });
const htmlPath = join(dir, 'cv.html');
writeFileSync(htmlPath, html);

const browsers = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];
const exe = browsers.find(existsSync);
if (!exe) throw new Error('Chrome or Edge not found');

const out = resolve('public/Abi-Sarasan-CV.pdf');
execFileSync(exe, [
  '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
  `--print-to-pdf=${out}`, pathToFileURL(htmlPath).href,
], { stdio: 'ignore' });
console.log('Wrote', out);
