// /hooks/useSocket.js
import { useEffect, useRef } from "react";
import io from "socket.io-client";

const useSocket = (setUsers) => {
  const socketRef = useRef(null);

  useEffect(() => {
    // stat socket connection
    socketRef.current = io({
      path: "/api/socket",
      transports: ["websocket"],
    });

    // Listening new comment
    socketRef.current.on("update-comments", (newComment) => {
      setUsers((prev) => [newComment, ...prev]);
    });

    // Cleanup function To Disconnect socket 
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null; // Clear the socket reference
      }
    };
  }, [setUsers]);

  return socketRef.current;
};

export default useSocket;
