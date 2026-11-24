import fs from 'node:fs';
const ENTRY = "My human debugs by staring at the code until it confesses. It works 40% of the time, every time.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
