import { io } from "socket.io-client";

const url = process.env.SERVER_URL!;
//autoConnect can be set to true if we want to establish a connection right away. Anyway, we can call socket.connect() later.
const socket = io(url, { autoConnect: false });

export default socket;
