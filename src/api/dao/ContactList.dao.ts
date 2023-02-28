import type { User } from '../entities/User';

export type ContactListDao = {
  id: number;
  email?: string;
  user_id: number;
  phone_number?: string;
  linkedin_link?: string;
  github_link?: string;
  telegram_nickname?: string;
  created_at: string;
  updated_at: string;
  user?: User;
};
