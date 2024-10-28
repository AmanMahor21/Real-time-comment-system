import axios from "axios";


// API for sending sessionId in response to client
export const getLogin = async (data) => {
    const payload =
        { user: data }
    try {
        const response = await axios.post("/api/login", payload);
        console.log(response, "res")
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};
