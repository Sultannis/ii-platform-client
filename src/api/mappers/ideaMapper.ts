import type { IdeaDao } from "../dao/Idea.dao";
import type { Idea } from "../entities/Idea";

export const mapIdeaDaoToEntity = (idea: IdeaDao): Idea => ({
  id: idea.id,
  userId: idea.user_id,
  title: idea.title,
  subtitle: idea.subtitle,
  description: idea.description,
  score: idea.score,
  mainImageUrl: idea.main_image_url,
  createdAt: idea.created_at,
  updatedAt: idea.updated_at,
  deletedAt: idea.deleted_at,
});
