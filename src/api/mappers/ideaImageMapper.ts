import type { IdeaImageDao } from '../dao/IdeaImage.dao';
import type { IdeaImage } from '../entities/IdeaImage';

export const mapIdeaImageDaoToEntity = (
  ideaImageDao: IdeaImageDao
): IdeaImage => ({
  id: ideaImageDao.id,
  ideaId: ideaImageDao.idea_id,
  path: ideaImageDao.path,
  isMain: ideaImageDao.is_main,
  created_at: ideaImageDao.created_at,
  idea: ideaImageDao.idea,
});
