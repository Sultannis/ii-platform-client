import type { UserDao } from "../dao/User.Dao";
import type { User } from "../entities/User";

export const mapUserDaoToEntity = (userDao: UserDao): User => ({
  id: userDao.id,
  email: userDao.email,
  firstName: userDao.first_name,
  lastName: userDao.last_name,
  role: userDao.role,
  confirmedAt: userDao.confirmed_at,
  createdAt: userDao.created_at,
  updatedAt: userDao.updated_at,
  deletedAt: userDao.deleted_at,
});
