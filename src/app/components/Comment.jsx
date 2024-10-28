"use client";
import React, { useEffect, useState } from "react";
import { Typography, TextField, Box } from "@mui/material";
import { format } from "date-fns";
import { useUser } from "../store/store";
import { postComment } from "@/services/commentService";
import { getComment } from "@/services/commentService";
import { useRouter } from "next/navigation";
import useSocket from "@/hooks/useSocket";
import Button from "@mui/material/Button";

const Comment = () => {
  const [users, setUsers] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { userInfo } = useUser();
  const router = useRouter();

  const socket = useSocket(setUsers);

  useEffect(() => {
    getComment().then((data) => data?.length > 0 && setUsers(data.reverse()));
    console.log(newComment, "comment");
  }, [userInfo]);

  const handleComment = () => {
    console.log("post");
    if (newComment.trim() == "") return;
    postComment(userInfo, newComment);

    const currTime = format(new Date(), "yyyy-MMM-dd HH:mm:ss");

    // Emit the new comment via the socket
    if (socket) {
      console.log("Emitting new comment", newComment);
      socket.emit("newComment", {
        username: userInfo.username,
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

      {users &&
        users.map((ele, index) => {
          const formattedDate = format(
            new Date(ele.timestamp),
            "yyyy-MMM-dd HH:mm:ss"
          );

          return (
            <div
              key={index}
              className="flex justify-start flex-col align-content-center rounded-xl border-2 !border-slate-600 px-3 py-2 mb-2 shadow-lg hover:bg-blend-darken"
            >
              <div className="justify-between flex">
                <span className="font-semibold text-2xl">{ele.username}</span>
                <span className="text-sm align-content-center ">
                  {formattedDate}
                </span>
              </div>
              <div className="text-lg">{ele.comment}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Comment;
