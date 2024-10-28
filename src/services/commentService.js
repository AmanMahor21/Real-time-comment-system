import axios from "axios";
import { format } from "date-fns";

//API for sending comments to DB
const postComment = async (name, newComment) => {
  console.log(name, newComment);

  const currTime = format(new Date(), "yyyy-MM-dd hh:mm:ss");
  console.log(currTime);

  try {
    const response = await axios.post("/api/comment-section", {
      name: name,
      comment: newComment,
      time: currTime,
    });

    console.log(response, "res");
  } catch (error) {
    console.log(error);
  }
};

// API for reciving all comment from DB
const getComment = async () => {
  try {
    const response = await axios.get("/api/comment-section");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

export { postComment, getComment };
