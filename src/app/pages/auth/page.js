"use client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { getLogin } from "@/services/request";
import { useRouter } from "next/navigation";

export default function Login() {
  const [input, setInput] = useState("");
  const router = useRouter();

  //Authenticating the user to redirect homepage
  const handleLogin = async () => {
    if (!input) {
      return;
    }
    getLogin(input).then((response) => {
      const userData = {
        id: response?.sessionID,
        name: input
      }
      if (response) {
        sessionStorage.setItem(
          "auth",
          JSON.stringify(userData)
        );

        router.push("/")
      }
    })
  };
  const onEnterLogin_Btn = (e) => {
    if (e.key == "Enter") {
      handleLogin()
    }
  }


  return (
    <div className="flex flex-col items-center justify-center h-[100vh] px-6">
      <div className="w-4/5 h-3/4 sm:w-1/2 s rounded-3xl flex flex-col justify-between items-center frosted_glass">
        <p className="text-center p-4 text-3xl">Login</p>
        <div className="flex flex-col text-left mx-5">
          <h3 className="text-violet-700 text-4xl">Hello,</h3>
          <h3 className="text-[#33276C87] mb-4">Welcome!</h3>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onKeyDown={onEnterLogin_Btn}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={handleLogin} className="!bg-violet-600 text-lg hover:bg-violet-800">
          Login
        </Button>
      </div>
    </div>
  );
}
