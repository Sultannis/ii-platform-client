import { io } from "socket.io-client";
import config from "../config/config";

export const useSocketIO = (socketUrl: string) => {
  const socket = io(socketUrl, {
    extraHeaders: {
      Authorization: config.authToken,
    },
  });

  const closeConnection = () => socket.close();

  return {
    socket,
    closeConnection,
  };
};
