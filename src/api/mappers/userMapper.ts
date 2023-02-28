import type { UserDao } from '../dao/User.Dao';
import type { User } from '../entities/User';

export const mapUserDaoToEntity = (userDao: UserDao): User => ({
  id: userDao.id,
  firstName: userDao.first_name,
  lastName: userDao.last_name,
  email: userDao.email,
  nickname: userDao.nickname,
  birthDate: userDao.birth_date,
  occupation: userDao.occupation,
  residenceCountry: userDao.residence_country,
  residenceCity: userDao.residence_city,
  bio: userDao.bio,
  avatarUrl: userDao.avatar_url,
  role: userDao.role,
  password: userDao.password,
  confirmedAt: userDao.confirmed_at,
  createdAt: userDao.created_at,
  updatedAt: userDao.updated_at,
  deletedAt: userDao.deleted_at,
  characteristics: userDao.characteristics,
  workCompanies: userDao.work_companies,
  educationalInstitutions: userDao.educational_institutions,
});
