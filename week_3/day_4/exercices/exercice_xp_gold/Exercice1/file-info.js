import { join } from 'path';
import { existsSync, statSync } from 'fs';

function getFileInfo() {

  const filePath = join(__dirname, 'data', 'example.txt');


  const exists = existsSync(filePath);

  console.log('File exists:', exists);

  if (exists) {
    const stats = statSync(filePath);

    console.log('File size (bytes):', stats.size);
    console.log('Creation time:', stats.birthtime);
  }
}

export default getFileInfo;