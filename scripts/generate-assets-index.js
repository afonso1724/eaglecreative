import fs from 'fs';
import path from 'path';

const BASE = path.join(process.cwd(), 'public', 'assets', 'parceiros');
const OUT = path.join(process.cwd(), 'public', 'assets', 'parceiros', 'index.json');

function isMedia(file) {
  const ext = path.extname(file).toLowerCase();
  return ['.jpeg', '.jpg', '.png', '.webp', '.mp4'].includes(ext);
}

function scan() {
  if (!fs.existsSync(BASE)) {
    console.warn('No parceiros assets folder found at', BASE);
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, JSON.stringify([]));
    return;
  }

  const folders = fs.readdirSync(BASE, { withFileTypes: true }).filter(d => d.isDirectory());
  const result = [];

  for (const folder of folders) {
    const folderPath = path.join(BASE, folder.name);
    const files = fs.readdirSync(folderPath).filter(f => isMedia(f));
    if (files.length === 0) continue;

    const entries = files.map(f => ({
      file: f,
      src: `assets/parceiros/${folder.name}/${encodeURI(f)}`,
      type: path.extname(f).toLowerCase() === '.mp4' ? 'video' : 'image',
    }));

    result.push({ folder: folder.name, files: entries });
  }

  fs.writeFileSync(OUT, JSON.stringify(result, null, 2));
  console.log('Wrote', OUT);
}

scan();
