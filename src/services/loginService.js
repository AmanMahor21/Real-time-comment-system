import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useLoginGuest = (setUserInfo) => {
    const router = useRouter();
    const loginGuest = useCallback(
        async (input) => {
            try {
                const sendUsername = await axios.post(
                    "/api/login",
                    {
                        user: input,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log("service pagew");
                setUserInfo((prev) => ({
                    ...prev,
                    sessionID: sendUsername.data.sessionID,
                    username: input[0].toUpperCase() + input.slice(1),
                }));

                router.push("/");

                sessionStorage.setItem(
                    "auth",
                    JSON.stringify(sendUsername.data.sessionID)
                );
            } catch (error) {
                console.log(error);
            }
        },
        [setUserInfo]
    );
    return loginGuest;
};

export default useLoginGuest;
