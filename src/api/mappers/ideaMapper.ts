import type { IdeaDao } from '../dao/Idea.dao';
import type { Idea } from '../entities/Idea';

export const mapIdeaDaoToEntity = (ideaDao: IdeaDao): Idea => ({
  id: ideaDao.id,
  authorId: ideaDao.author_id,
  title: ideaDao.title,
  subtitle: ideaDao.subtitle,
  description: ideaDao.description,
  likes: ideaDao.likes,
  createdAt: ideaDao.created_at,
  updatedAt: ideaDao.updated_at,
  deletedAt: ideaDao.deleted_at,
  author: ideaDao.author,
  tags: ideaDao.tags,
  images: ideaDao.images,
});
