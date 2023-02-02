import { io } from 'socket.io-client';

export const useSocketIO = (socketUrl: string, authToken: string) => {
  const socket = io(socketUrl, {
    extraHeaders: {
      Authorization: authToken,
    },
  });

  return socket;
};
