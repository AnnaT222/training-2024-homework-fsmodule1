const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
      <body>
        <script src="/socket.io/socket.io.js"></script>
        <script>
          const socket = io();
          socket.on('message', (msg) => alert(msg));
        </script>
      </body>
    </html>
  `);
});

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("The client is connected!!");
  socket.emit("message", "Hello from server!!!");
});

server.listen(3000, () => {
  console.log("Server is on http://localhost:3000!!!");
});
