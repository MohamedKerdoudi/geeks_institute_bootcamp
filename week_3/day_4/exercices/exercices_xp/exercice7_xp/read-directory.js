import { readdir } from 'fs';

readdir('.', (err, files) => {
  if (err) {
    console.log("Error reading directory");
  } else {
    console.log("Files in directory:");
    files.forEach(file => console.log(file));
  }
});
//output: Files in directory: (followed by a list of files in the current directory)