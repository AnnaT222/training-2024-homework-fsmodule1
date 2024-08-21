const fs = require("node:fs");
const path = require("node:path");
// -------------------with pipe------------------

const readFilePath = path.join(__dirname, "readFile.txt");
const writeFilePath = path.join(__dirname, "writeFile_2.txt");

fs.createReadStream(readFilePath, "utf-8")
  .pipe(fs.createWriteStream(writeFilePath, "utf-8"))
  .on("finish", () => {
    console.log("Successfully finish!!");
  })
  .on("error", (err) => {
    console.log("You have an error:", err);
  });
