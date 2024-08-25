const fs = require("node:fs/promises");
const path = require("node:path");

const filePath = path.join(__dirname, "file.txt");

async function printMetaData(file) {
  try {
    const stats = await fs.stat(file);
    console.log("File Metadata:");
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created: ${stats.birthtime}`);
    console.log(`Last Modified: ${stats.mtime}`);
    console.log(`Is Directory: ${stats.isDirectory()}`);
    console.log(`Is File: ${stats.isFile()}`);
  } catch (err) {
    console.log(err);
  }
}

printMetaData(filePath);
