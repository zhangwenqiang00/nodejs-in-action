"use strict";

const net = require("net");

const echoServer = net.createServer(socket => {
  socket.on("data", data => {
    console.log(`data received: echoing ${data}`);
    socket.write(`echo: ${data}`);
  });
});

echoServer.listen(8888);
console.log("echo server established on port 8888");