// Builds public/Abi-Sarasan-CV.pdf from src/data.js using headless Chrome/Edge.
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { profile, experience, education, certifications, ticker, projects } from '../src/data.js';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@page { size: A4; margin: 14mm 16mm; }
* { box-sizing: border-box; }
body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; color: #1b2433; font-size: 10pt; line-height: 1.45; margin: 0; }
h1 { font-size: 24pt; margin: 0; color: #0a1224; }
.role { color: #0f9d8a; font-weight: 600; font-size: 12pt; margin: 2px 0 6px; }
.contact { color: #51607a; font-size: 9.5pt; padding-bottom: 8px; border-bottom: 2px solid #0f9d8a; }
h2 { font-size: 11pt; text-transform: uppercase; letter-spacing: 0.08em; color: #0a1224; margin: 14px 0 6px; border-bottom: 1px solid #d5dce8; padding-bottom: 2px; }
.job { margin-bottom: 9px; break-inside: avoid; }
.job-h { display: flex; justify-content: space-between; font-weight: 700; }
.job-h span:last-child { font-weight: 400; color: #51607a; font-size: 9.5pt; }
.co { color: #0f9d8a; font-weight: 600; }
ul { margin: 3px 0 0; padding-left: 16px; }
li { margin-bottom: 1px; }
p { margin: 0 0 5px; }
</style></head><body>
<h1>${esc(profile.name)}</h1>
<div class="role">${esc(profile.role)}</div>
<div class="contact">${esc(profile.location)} · ${esc(profile.email)} · ${esc(profile.linkedin.replace('https://www.', ''))}</div>
<h2>Profile</h2>${profile.about.map((p) => `<p>${esc(p)}</p>`).join('')}
<h2>Core Skills</h2><p>${ticker.map(esc).join(' · ')}</p>
<h2>Experience</h2>
${experience.map((e) => `<div class="job"><div class="job-h"><span>${esc(e.role)}</span><span>${esc(e.period)}</span></div>
<div><span class="co">${esc(e.company)}</span> · ${esc(e.place)}</div>
<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul></div>`).join('')}
<h2>Featured Projects</h2>
<ul>${projects.map((p) => `<li><b>${esc(p.title)}</b> (${esc(p.tag)}): ${esc(p.text)}</li>`).join('')}</ul>
<h2>Education</h2>${education.map((e) => `<p><b>${esc(e.school)}</b>${e.detail.startsWith('Add ') ? '' : ' · ' + esc(e.detail)}</p>`).join('')}
<h2>Certifications</h2><p>${certifications.map(esc).join(' · ')}</p>
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
