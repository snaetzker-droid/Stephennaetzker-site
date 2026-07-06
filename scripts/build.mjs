import fs from 'node:fs';
import path from 'node:path';
import content from '../src/content.json' with { type: 'json' };

const root = process.cwd();
const out = path.join(root, 'out');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
function writePage(route, html) {
  const dir = path.join(out, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}
copyDir(path.join(root, 'public'), out);
fs.copyFileSync(path.join(root, 'src', 'styles.css'), path.join(out, 'styles.css'));
writePage('', content.home);
writePage('essays', content.essays);
writePage('essays/the-cortana-effect', content.cortana);
writePage('essays/the-courage-to-follow-the-evidence', content.courage);
writePage('about', content.about);
writePage('projects', content.projects);
writePage('resume', content.resume);
writePage('contact', content.contact);
// fallback 404 for direct route safety
fs.writeFileSync(path.join(out, '404.html'), content.home, 'utf8');
console.log('Static build complete: out/');
