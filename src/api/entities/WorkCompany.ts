import type { User } from './User';

export type WorkCompany = {
  id: number;
  userId: number;
  companyName: string;
  description?: string;
  position: string;
  country: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
};
