import type { TagDao } from '../dao/Tag.dao';
import type { Tag } from '../entities/Tag';

export const mapTagDaoToEntity = (tagDao: TagDao): Tag => ({
  id: tagDao.id,
  name: tagDao.name,
  createdAt: tagDao.created_at,
  users: tagDao.users,
});
