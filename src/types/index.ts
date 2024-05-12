export interface Author {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
}

export interface Post {
  author_id: number;
  body: string;
  created_at: string;
  id: number;
  image_url: string;
  title: string;
}
