const fs = require('fs');

function readFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log("File Content:", content);
  return content;
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log("Content written successfully!");
}

module.exports = { readFile, writeFile };