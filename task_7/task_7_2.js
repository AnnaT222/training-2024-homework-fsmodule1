const fs = require("node:fs/promises");
const path = require("node:path");

const copiedDirPath = path.join(__dirname, "dir1");
const dirPath = path.join(__dirname, "copyDir");

async function copyDirContent(copied, newDir) {
  try {
    await fs.mkdir(newDir, { recursive: true });

    const files = await fs.readdir(copied, { withFileTypes: true });

    for (const file of files) {
      const copiedPath = path.join(copied, file.name);
      const newDirPath = path.join(newDir, file.name);

      if (file.isDirectory()) {
        await copyDirContent(copiedPath, newDirPath);
      } else {
        await fs.cp(copiedPath, newDirPath);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

copyDirContent(copiedDirPath, dirPath);