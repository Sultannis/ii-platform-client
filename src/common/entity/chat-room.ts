import type { ChatMessage } from "./chat-message";
import { ChatParticipant } from "./chat-participant";

export interface ChatRoom {
  id: string;
  roomAdminId: number;
  name: string;
  backgroundColor?: string | null;
  backgroundImage?: string | null;
  type: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  messages?: ChatMessage[];
  message?: ChatMessage;
  notReadedMessagesAmount?: number | null;
  participants: ChatParticipant[];
  participantsAmount?: number;
}

export interface ChatMeta {
  total: number;
  perPage: number;
  page: number;
}

export interface ChatRoomData {
  messages: ChatMessage[];
  room?: ChatRoom;
  meta: ChatMeta;
}
