const fs = require("node:fs/promises");
const path = require("path");

const filePath=path.join(__dirname, 'file.txt')
async function readNotExistedFile() {
  try {
    const data=await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (err) {
    if (err.code='ENOENT') {
      console.log("File does not exist!");
    } else {
      throw err;
    }
  }
}
readNotExistedFile()