export interface Post {
  author: Author;
  excerpt: string;
  createdAt: string;
  slug: string;
  title: string;
  featuredImage: Photo;
  categories: Category[];
  content: PostContent;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Author {
  name: string;
  description: string;
  id: string;
  photo: Photo;
}

export interface Photo {
  url: string;
}

export interface PostContent {
  raw: { children: Child[] };
}

export interface Child {
  type: string;
  children: textType[];
}

export interface textType {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  width?: string;
  height?: string;
  src?: string;
  title?: string;
}
