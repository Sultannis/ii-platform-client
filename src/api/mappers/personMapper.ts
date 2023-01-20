import type { PersonDao } from "@/api/dao/Person.dao";
import type { Person } from "@/api/entities/Person";

export const mapPersonDaoToEntity = (personDao: PersonDao): Person => ({
  id: personDao.id,
  email: personDao.email,
  firstName: personDao.first_name,
  lastName: personDao.last_name,
  occupation: personDao.occupation,
  role: personDao.role,
  confirmedAt: personDao.confirmed_at,
  createdAt: personDao.created_at,
  updatedAt: personDao.updated_at,
  deletedAt: personDao.deleted_at,
  avatarUrl: personDao.avatar_url,
  interactionsCount: personDao.interactions_count,
});
