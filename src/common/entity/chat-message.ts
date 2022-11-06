import type { ChatRoom } from "./chat-room";
import type { User } from "./user";

export interface ChatMessage {
  id: string;
  userId: number;
  roomId: string;
  message: string;
  type: number;
  position?: number;
  readedAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  user: User;
  room: ChatRoom;
}
