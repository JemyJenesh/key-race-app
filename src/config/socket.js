import io from "socket.io-client";

export const socket = io(
  process.env.REACT_APP_API_URL || "http://localhost:5000"
);
