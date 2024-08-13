const fs = require("node:fs/promises");
const path = require("node:path");

const data = "Hello World! ";
const modifiedData = "This is Node.js FS module.";
const filePath=path.join(__dirname, 'example.txt')

async function fileManagment() {
  try {
    await fs.access(filePath , fs.constants.F_OK);
    await fs.appendFile(filePath, modifiedData);
    const content = await fs.readFile(filePath, "utf8");
    console.log("This is the example.txt file's content:", content);
  } catch (err) {
    if (err.message.includes(filePath)) {
      await fs.writeFile(filePath, data);
      console.log("example.txt created");
    } else {
      console.error("Unexpected error:", err);
    }
  }
}
fileManagment();