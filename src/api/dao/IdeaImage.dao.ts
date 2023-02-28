import type { Idea } from '../entities/Idea';

export type IdeaImageDao = {
  id: number;
  idea_id: number;
  path: string;
  is_main: string;
  created_at: string;
  idea?: Idea;
};
