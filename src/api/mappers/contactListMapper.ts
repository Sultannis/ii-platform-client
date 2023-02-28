import type { ContactListDao } from '../dao/ContactList.dao';
import type { ContactList } from '../entities/ContactList';

export const mapContactListDaoToEntity = (
  contactListDao: ContactListDao
): ContactList => ({
  id: contactListDao.id,
  email: contactListDao.email,
  userId: contactListDao.user_id,
  phoneNumber: contactListDao.phone_number,
  linkedinLink: contactListDao.linkedin_link,
  githubLink: contactListDao.github_link,
  telegramNickname: contactListDao.telegram_nickname,
  createdAt: contactListDao.created_at,
  updatedAt: contactListDao.updated_at,
  user: contactListDao.user,
});
