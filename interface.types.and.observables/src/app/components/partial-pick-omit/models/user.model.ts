export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export type UserDraft = Partial<User>;
export type UserPreview = Pick<User, 'id' | 'name' | 'email'>;
export type UserWithoutContact = Omit<User, 'email' | 'phone'>;
