"use client";
import React, { useEffect, useState } from "react";
import { Typography, TextField, Box } from "@mui/material";
import { format } from "date-fns";
import { postComment } from "@/services/commentService";
import { getComment } from "@/services/commentService";
import useSocket from "@/hooks/useSocket";
import Button from "@mui/material/Button";
import CommentList from "./CommentList";
const Comment = () => {
  const [users, setUsers] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const socket = useSocket(setUsers);

  // Fetching all comments from DB 
  useEffect(() => {
    getComment().then((data) => data?.length > 0 && setUsers(data.reverse()));
    const sessionData = JSON.parse(sessionStorage.getItem("auth"));
    setName(sessionData.name);
    console.log(newComment, "comment");
   
  }, []);

  // Sending comment to socketIO to broadcast all user
  const handleComment = () => {
    console.log("post");
    if (newComment.trim() == "") return;
    postComment(name, newComment);

    const currTime = format(new Date(), "yyyy-MMM-dd HH:mm:ss");

    // Emit the new comment via the socket
    if (socket) {
      console.log("Emitting new comment", newComment);
      socket.emit("newComment", {
        username: name,
        comment: newComment,
        timestamp: currTime,
      });
    }

    // Clear the input field after submission
    setNewComment("");
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      handleComment();
    }
  };

  return (
    <div className="commentWrapper">
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: "34px", md: "38px", lg: "44px" } }}
      >
        Real Time Comment System
      </Typography>
      <Typography
        variant="h6"
        sx={{ margin: "11px 0", fontSize: { xs: "16px", md: "18px" } }}
      >
        A Real-Time Comment System allows users to post and see comments
        instantly, without needing to refresh the page. When one user posts a
        comment, it is immediately visible to all other users viewing the same
        page or thread.
      </Typography>
      <Box
        sx={{ margin: "33px 0", width: { xs: "100%", md: "70%", lg: "50%" } }}
        className="h-10 flex"
      >
        <input
          className="form-control  border-2 border-slate-700"
          type="text"
          placeholder="Write Comment..."
          aria-label="default input example"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleInput}
        />

        <Button
          variant="contained"
          className="h-[100%] !bg-violet-600 text-lg hover:bg-violet-800"
          onClick={handleComment}
        >
          Send
        </Button>
      </Box>
      <CommentList users={users} name={name}/>
    </div>
  );
};

export default Comment;
