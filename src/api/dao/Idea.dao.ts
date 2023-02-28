import type { IdeaImage } from '../entities/IdeaImage';
import type { Tag } from '../entities/Tag';
import type { User } from '../entities/User';

export type IdeaDao = {
  id: number;
  author_id: number;
  title: string;
  subtitle: string;
  description: string;
  likes: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  author?: User;
  tags?: Tag[];
  images?: IdeaImage[];
};
