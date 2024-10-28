"use client";
import Comment from "./components/Comment";
import Login from "./pages/auth/page";

export default function Home() {

  const isExist = sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : null;

  return <div>{isExist ? <Comment /> : <Login />}</div>;
}
