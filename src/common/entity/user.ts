export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: number;
  password: string;
  chatColor: string;
  createdAt: string;
  updatedAt: string;
  confirmedAt?: string | null;
  deletedAt?: string | null;
}
