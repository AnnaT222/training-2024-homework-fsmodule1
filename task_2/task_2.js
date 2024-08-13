const fs = require("node:fs/promises");
const path = require("node:path");

const testFileData = "This is testFile text";
const dirPath=path.join(__dirname, 'testDir')
const dirFilePath=path.join(__dirname, 'testDir/testFile.txt')
const renamedFilePath=path.join(__dirname, 'testDir/renamed.txt')

async function dirManagment() {
  try {
    await fs.access(dirPath, fs.constants.F_OK);
    await fs.access(dirFilePath, fs.constants.F_OK);

    await fs.rename(dirFilePath, renamedFilePath);
    await fs.rm(dirPath, { recursive: true, force: true });
  } catch (err) {
    if (err.message.includes("example.txt")) {
      await fs.writeFile("example.txt", data);
      console.log("example.txt created");
    } else if (
      err.message.includes("testDir\testFile.txt") ||
      err.message.includes(dirPath)
    ) {
      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(dirFilePath, testFileData);
    } else if (fs.access("testDir/renamed.txt")) {
      await fs.rm(dirPath, { recursive: true, force: true });
    } else {
      console.error("Unexpected error:", err);
    }
  }
}
dirManagment();