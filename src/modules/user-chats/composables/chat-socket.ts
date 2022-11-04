import { type Ref, ref, reactive } from "vue";
import type { ChatRoom, ChatRoomData } from "@/common/entity/chat-room";
import { useSocketIO } from "@/common/composables/socket-io";
import config from "@/common/config/config";
import type { Socket } from "socket.io-client";
import type { ChatMessage } from "@/common/entity/chat-message";
import { useAuthenticate } from "@/common/composables/authenticate";
import { useUser } from "@/common/composables/user";

export enum SocketEvent {
  CONNECTION = "connection",
  ROOMS = "rooms",
  JOIN = "join",
  MESSAGE = "message",
  MESSAGE_READ = "message-read",
}

const { auth } = useAuthenticate();
const { user } = useUser();

const userId = user.id;
const authToken = "Bearer " + auth.authToken;

const socket: Ref<Socket> = ref();
const rooms = ref([] as ChatRoom[]);
const joinedRoom: ChatRoomData = reactive({
  room: null,
  messages: [],
  meta: { page: 1, perPage: 20, total: 0 },
});
const chatSocketLoading = ref(false);

const startChatSocketLoading = () => (chatSocketLoading.value = true);
const finishChatSocketLoading = () => (chatSocketLoading.value = false);

const subscribeOnMessage = (message: string, handler: (data: any) => void) => {
  socket.value.on(message, handler);
};

const updateChatMessage = (payload: ChatMessage) => {
  const index = joinedRoom.messages.findIndex(
    (message) => message.id === payload.id
  );

  if (index === -1) {
    joinedRoom.messages.push(payload);
  } else {
    joinedRoom.messages[index] = payload;
  }
};

const closeConnection = () => socket.value.disconnect();

export const useChatSocket = () => {
  socket.value = useSocketIO(config.socketUrl, authToken);

  startChatSocketLoading();
  socket.value.emit(SocketEvent.CONNECTION);

  socket.value.on(SocketEvent.ROOMS, (payload: ChatRoom[]) => {
    rooms.value = payload;
    finishChatSocketLoading();
  });
};

export {
  socket,
  rooms,
  joinedRoom,
  userId,
  chatSocketLoading,
  subscribeOnMessage,
  closeConnection,
  updateChatMessage,
  startChatSocketLoading,
  finishChatSocketLoading,
};
