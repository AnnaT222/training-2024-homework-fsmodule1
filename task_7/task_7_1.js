const fs = require("node:fs/promises");
const path = require("node:path");

const startPath = __dirname;

async function listDirsAndFiles(dir) {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });
    for (const file of files) {
      const currentFile = path.join(dir, file.name);
      if (file.isDirectory()) {
        await listDirsAndFiles(currentFile);
      } else {
        console.log(currentFile);
      }
    }
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}

listDirsAndFiles(startPath);

// 2. Write another script that copies the contents of one directory to another, preserving the directory structure.    


