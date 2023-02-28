import type { User } from './User';

export type EducationalInstitution = {
  id: number;
  userId: number;
  institutionName: string;
  description?: string;
  levelOfEducation: string;
  country: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
};
