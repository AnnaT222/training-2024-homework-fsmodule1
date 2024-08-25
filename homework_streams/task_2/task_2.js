const fs = require("node:fs");
const path = require("node:path");
const { Transform } = require("node:stream");

const inputFilePath = path.join(__dirname, "input.json");
const outputFilePath = path.join(__dirname, "output.json");

const transformStream = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,

  transform(chunk, enc, callback) {
    let data;
    try {
      data = JSON.parse(chunk);

      data.forEach((obj) => {
        obj.timestamp = new Date().toISOString();
      });

      const newData = JSON.stringify(data, null, 2);

      this.push(newData);

      callback();
    } catch (err) {
      callback(err);
    }
  },
});

fs.createReadStream(inputFilePath, "utf-8")
  .pipe(transformStream)
  .pipe(fs.createWriteStream(outputFilePath))
  .on("finish", () => {
    console.log("Successfully finished!!!");
  })
  .on("error", (err) => {
    console.error("Error from stream operation:", err);
  });
