"use client";
import React, { useState } from "react";
import Comment from "./components/Comment";
import { useUser } from "./store/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { userInfo } = useUser();
  const [isExistAuth, setIsExistAuth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      if (auth) {
        setIsExistAuth(auth);
      } else {
        router.push("/pages/auth");
      }
    }
  }, [router]);

  if (!isExistAuth) {
    return null
  }

  return (
    <div>
      <Comment />
    </div>
  );
}
