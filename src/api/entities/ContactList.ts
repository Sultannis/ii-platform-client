import type { User } from './User';

export type ContactList = {
  id: number;
  email?: string;
  userId: number;
  phoneNumber?: string;
  linkedinLink?: string;
  githubLink?: string;
  telegramNickname?: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
};
