import type { UserCharacteristic } from '../entities/Characteristic';
import type { EducationalInstitution } from '../entities/EducationalInstitution';
import type { WorkCompany } from '../entities/WorkCompany';

export type UserDao = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  nickname?: string;
  birth_date?: string;
  occupation?: string;
  residence_country?: string;
  residence_city?: string;
  bio?: string;
  avatar_url?: string;
  role: number;
  password: string;
  confirmed_at?: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  characteristics: UserCharacteristic[];
  work_companies: WorkCompany[];
  educational_institutions: EducationalInstitution[];
};
