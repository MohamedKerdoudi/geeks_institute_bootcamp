import { readFile, writeFile } from './fileManager';

const content = readFile('Hello World.txt');
writeFile('Bye World.txt', 'Writing to the file');