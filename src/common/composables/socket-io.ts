import { io } from "socket.io-client";

export const useSocketIO = (socketUrl: string) => {
  const socket = io(socketUrl, {
    extraHeaders: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJ0eXBlIjoidXNlciIsImlhdCI6MTY2Njk2NTQ2MiwiZXhwIjoxNjY3NTcwMjYyfQ.rGeHm2gkz1G_6C0auJYzN2SrJf2y7mGhMpgllt7webw",
    },
  });

  const closeConnection = () => socket.close();

  return {
    socket,
    closeConnection,
  };
};
