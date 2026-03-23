export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
}

export interface CachedUserResult {
  user: User;
  fromCache: boolean;
}

export interface UserPostsResult {
  user: User;
  posts: Post[];
}
