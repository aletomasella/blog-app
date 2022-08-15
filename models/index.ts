export interface Post {
  author: Author;
  excerpt: string;
  createdAt: string;
  slug: string;
  title: string;
  featuredImage: Photo;
  categories: Category[];
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
