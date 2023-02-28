import type { UserCharacteristic } from './Characteristic';
import type { EducationalInstitution } from './EducationalInstitution';
import type { WorkCompany } from './WorkCompany';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  nickname?: string;
  birthDate?: string;
  occupation?: string;
  residenceCountry?: string;
  residenceCity?: string;
  bio?: string;
  avatarUrl?: string;
  role: number;
  password: string;
  confirmedAt?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  characteristics: UserCharacteristic[];
  workCompanies: WorkCompany[];
  educationalInstitutions: EducationalInstitution[];
};
