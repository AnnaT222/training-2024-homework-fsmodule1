const fsSync = require("node:fs");
const fs = require("node:fs/promises");
const path = require("node:path");

const syncFilePath = path.join(__dirname, "test1.txt");
const syncFileDaqta = "file created in a synchronous way";
const filePath = path.join(__dirname, "test2.txt");
const fileData = "file created in an asynchronous way";

fsSync.writeFileSync(syncFilePath, syncFileDaqta);
const syncData = fsSync.readFileSync(syncFilePath, "utf8");
console.log(syncData);

async function createFile() {
  try {
    await fs.writeFile(filePath, fileData);
    console.log("Asynchronous write created.");

    const data = await fs.readFile(filePath, "utf8");
    console.log("Asynchronous read created");
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
createFile();

