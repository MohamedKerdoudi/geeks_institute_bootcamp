import { readFile as _readFile } from "fs";

function readFile(filePath) {
  _readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err.message);
      return;
    }
    console.log("📖 File Content:\n");
    console.log(data);
  });
}

export default readFile;