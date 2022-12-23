import { io } from "socket.io-client";

//autoConnect can be set to true if we want to establish a connection right away. Anyway, we can call socket.connect() later.
const socket = io(
  process.env.NODE_ENV === "production"
    ? "https://chatpp-server.onrender.com"
    : "http://localhost:8000",
  { autoConnect: false }
);

export default socket;
