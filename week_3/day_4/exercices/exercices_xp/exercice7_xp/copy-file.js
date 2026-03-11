import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('source.txt', 'utf8');
writeFileSync('destination.txt', content);

console.log("File copied successfully!");
//output: File copied successfully!