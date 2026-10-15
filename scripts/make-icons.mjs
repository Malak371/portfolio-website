// Generates the PNG favicons and the Open Graph preview image in public/.
// Run with: node scripts/make-icons.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const favicon = readFileSync('public/favicon.svg');
await sharp(favicon, { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(favicon, { density: 600 }).resize(180, 180).flatten({ background: '#1d4ed8' }).png().toFile('public/apple-touch-icon.png');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0b1120"/>
  <rect x="0" y="0" width="16" height="630" fill="#1d4ed8"/>
  <text x="96" y="270" font-family="Helvetica, Arial, sans-serif" font-size="84" font-weight="700" fill="#e2e8f0">Malak Abdelhakim</text>
  <text x="96" y="350" font-family="Helvetica, Arial, sans-serif" font-size="44" fill="#93c5fd">Software Engineer · Portfolio</text>
  <text x="96" y="470" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#a3b1c6">Featured projects · Experience · Contact</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og.png');
console.log('icons and og.png written');
