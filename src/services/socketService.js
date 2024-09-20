import io from "socket.io-client";

const socket = io(
  process.env.NODE_ENV === "production"
    ? "https://petro-map-rdc-backend.vercel.app"
    : "http://localhost:3500"
);

export default socket;
