"use client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useUser } from "../../store/store";
import { useState } from "react";
import useLoginGuest from "@/services/loginService";
import { Height } from "@mui/icons-material";

export default function Login() {
  const [input, setInput] = useState("");
  const { setUserInfo } = useUser();
  const loginGuest = useLoginGuest(setUserInfo);

  const handleLogin = async () => {
    if (!input) {
      console.log("Enter a username");
      return;
    }
    loginGuest(input);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <div className="w-1/2 h-3/4 s rounded-3xl flex flex-col justify-between items-center frosted_glass">
        <p className="text-center p-4 text-3xl">Login</p>
        <div className="flex flex-col text-left mx-5">
          <h3 className="text-violet-700 text-4xl">Hello,</h3>
          <h3 className="text-[#33276C87] mb-4">Welcome!</h3>
          {/* <h3 className="text-blue-600 mb-4">Welcome!</h3> */}
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
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
