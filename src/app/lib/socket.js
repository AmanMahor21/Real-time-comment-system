// import { Server } from "socket.io";

// let io;

// export const initSocket = (server) => {
//   if (!io) {
//     io = new Server(server, {
//       path: "/api/socket",
//     });

//     io.on("connection", (socket) => {
//       console.log("New client connected");

//       socket.on("newComment", (newComment) => {
//         io.emit("update-comments", newComment);
//       });

//       socket.on("disconnect", () => {
//         console.log("Client disconnected");
//       });
//     });

//     console.log("Socket.io initialized");
//   } else {
//     console.log("Socket.io already initialized");
//   }
// };

// export const getSocket = () => {
//   if (!io) {
//     throw new Error("Socket.io not initialized!");
//   }
//   return io;
// };
