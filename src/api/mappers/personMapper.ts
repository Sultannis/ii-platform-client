import type { PersonDao } from "@/api/dao/Person.dao";
import type { Person } from "@/api/entities/Person";

export const mapPersonDaoToEntity = (personDao: PersonDao): Person => ({
  id: personDao.id,
  email: personDao.email,
  firstName: personDao.first_name,
  lastName: personDao.last_name,
  nickName: personDao.nick_name,
  birthDate: personDao.birth_date,
  residenceCountry: personDao.residence_country,
  residenceCity: personDao.residence_city,
  occupation: personDao.occupation,
  bio: personDao.bio,
  avatarUrl: personDao.avatar_url,
  role: personDao.role,
  createdAt: personDao.created_at,
  updatedAt: personDao.updated_at,
  confirmedAt: personDao.confirmed_at,
  characteristics: personDao.characteristics,
  interactionsCount: personDao.interactions_count,
});
