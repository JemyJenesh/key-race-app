import io from "socket.io-client";

export const socket = io(process.env.API_URL || "http://localhost:5000");
