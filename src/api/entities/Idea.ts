import type { IdeaImage } from './IdeaImage';
import type { Tag } from './Tag';
import type { User } from './User';

export type Idea = {
  id: number;
  authorId: number;
  title: string;
  subtitle: string;
  description: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  author?: User;
  tags?: Tag[];
  images?: IdeaImage[];
};
