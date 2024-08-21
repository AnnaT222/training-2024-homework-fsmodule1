const fs = require("node:fs");
const path = require("node:path");

const readFilePath = path.join(__dirname, "readFile.txt");
const writeFilePath = path.join(__dirname, "writeFile.txt");

// ---------------without pipe---------------------
const readData = fs.createReadStream(readFilePath, "utf-8");
const writeData = fs.createWriteStream(writeFilePath, "utf-8");
readData.on("data", (data) => {
  writeData.write(data);
});

readData.on("error", (err) => {
  console.log("Error from readable stream:", err);
});

writeData.on("error", (err) => {
  console.log("Error from writable stream:", err);
});

readData.on("end", () => {
  console.log("Successfully finished!!");
});
