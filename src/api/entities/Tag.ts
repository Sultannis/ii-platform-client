import type { Idea } from './Idea';

export type Tag = {
  id: number;
  name: string;
  createdAt: string;
  users?: Idea[];
};
