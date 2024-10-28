// server.js
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const expressApp = express();
  const server = createServer(expressApp);
  const io = new Server(server, {
    path: "/api/socket",
  });

  io.on("connection", (socket) => {
    console.log("New client connected", socket.id);

    socket.on("newComment", (newComment) => {
      io.emit("update-comments", newComment);
    });

    socket.on("disconnect", (reason) => {
      console.log("Client disconnected", socket.id);
    });
  });

  expressApp.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
