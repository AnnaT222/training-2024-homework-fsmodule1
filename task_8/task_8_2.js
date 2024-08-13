const fs = require("node:fs/promises");
const path = require("node:path");

const filePath = path.join(__dirname, "file.txt");
async function changePermissions(filePath) {
  try {
    await fs.chmod(filePath, 0o400);
    const newStats = await fs.stat(filePath);
    console.log(newStats);
  } catch (err) {
    console.log(err);
  }
}
changePermissions(filePath);