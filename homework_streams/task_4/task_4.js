const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "largeFile.txt");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/download") {
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, { "Content-Type": "application/octet-stream" });

    readStream.pipe(res);

    readStream.on("error", (err) => {
      console.error("Error while streaming the file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server error");
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
