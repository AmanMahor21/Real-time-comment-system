import axios from "axios";
import { format } from "date-fns";

const postComment = async (userInfo, newComment) => {
  console.log(userInfo, newComment);

  const currTime = format(new Date(), "yyyy-MM-dd hh:mm:ss");
  console.log(currTime);

  try {
    const response = await axios.post("/api/comment-section", {
      name: userInfo.username,
      comment: newComment,
      time: currTime,
    });

    console.log(response, "res");
  } catch (error) {
    console.log(error);
  }
};

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
