const fs = require("node:fs/promises");
const path = require("node:path");

const copiedDirPath = path.join(__dirname, "dir1");
const dirPath = path.join(__dirname, "copyDir");

async function copyDirContent(copied, newDir) {
  try {
    await fs.mkdir(newDir, { recursive: true });

    await fs.cp(copied, newDir, { recursive: true });
  } catch (err) {
    console.error(err);
  }
}

copyDirContent(copiedDirPath, dirPath);
