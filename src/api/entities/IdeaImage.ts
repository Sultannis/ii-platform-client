import type { Idea } from './Idea';

export type IdeaImage = {
  id: number;
  ideaId: number;
  path: string;
  isMain: string;
  created_at: string;
  idea?: Idea;
};
