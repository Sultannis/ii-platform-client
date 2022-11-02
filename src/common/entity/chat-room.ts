import type { ChatMessage } from "./chat-message";

export interface ChatRoom {
  id: string;
  roomAdminId: number;
  name: string;
  usersAccess: number[];
  backgroundColor?: string | null;
  backgroundImage?: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  messages?: ChatMessage[];
  message?: ChatMessage;
  notReadedMessagesAmount?: number | null;
}
