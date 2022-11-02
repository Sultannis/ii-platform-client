import { onBeforeUnmount, ref, type Ref } from "vue";
import type { ChatRoom } from "@/common/entity/chat-room";
import { useSocketIO } from "@/common/composables/socket-io";
import config from "@/common/config/config";

const chatRooms = ref([] as ChatRoom[]);
const chatRoomId = ref("");
const activeChatRoom: Ref<ChatRoom | null> = ref(null);

const setActiveChatRoom = (roomId: string) => (chatRoomId.value = roomId);

const useChatSocketIO = () => {
  const { socket, closeConnection } = useSocketIO(config.socketUrl);

  socket.on("connect", () => {
    console.log("connect");
  });

  socket.on("disconnect", () => {
    console.log("disconnect");
  });

  socket.on("rooms", (rooms: ChatRoom[]) => {
    chatRooms.value = rooms;
    console.log(chatRooms);
  });

  socket.on("join", (room: ChatRoom) => {
    activeChatRoom.value = room;
  });

  socket.emit("connection");

  const socketEmit = (event: string, ...args: object[] | string[]) => {
    return socket.emit(event, ...args);
  };

  onBeforeUnmount(() => {
    closeConnection();
  });

  return {
    closeConnection,
    socketEmit,
  };
};

export { chatRooms, activeChatRoom, setActiveChatRoom, useChatSocketIO };
