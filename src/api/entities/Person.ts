export type Person = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  nickname?: string;
  birthDate?: string;
  residenceCountry?: string;
  residenceCity?: string;
  occupation?: string;
  bio?: string;
  avatarUrl?: string;
  role: number;
  createdAt: string;
  updatedAt: string;
  confirmedAt?: string;
  characteristics: string;
  interactionsCount: number;
};
