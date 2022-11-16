import type { IdeaDao } from "../dao/Idea.dao";
import type { Idea } from "../entities/Idea";

export const mapIdeaDaoToEntity = (idea: IdeaDao): Idea => ({
  id: idea.id,
  userId: idea.user_id,
  title: idea.title,
  description: idea.description,
  createdAt: idea.created_at,
  updatedAt: idea.updated_at,
  deletedAt: idea.deleted_at,
});
