
import { readFile } from 'fs';
import { join } from 'path';

function readFileContent() {
  const filePath = join(__dirname, 'files', 'file-data.txt');

  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File Content:\n');
    console.log(data);
  });
}

export default readFileContent;