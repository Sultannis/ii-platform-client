import type { Idea } from '../entities/Idea';

export type TagDao = {
  id: number;
  name: string;
  created_at: string;
  users?: Idea[];
};
