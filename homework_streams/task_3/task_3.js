const { Readable, Writable } = require("stream");

const readableStream = new Readable({
  read() {
    this.push("Anna Tazayan");
    this.push('21 y/o');
    this.push("Student at the NPUA and EPAM");
    this.push("Learning NodeJs");
    this.push(null);
  },
});
const writableStream = new Writable({
  write(chunk, enc, cb) {
    console.log("Write:", chunk.toString());
    setTimeout(cb, 1000);
  },
});
readableStream.pipe(writableStream)