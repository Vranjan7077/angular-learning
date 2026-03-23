import { User } from './user.model';

export type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export interface UserState {
  status: ApiStatus;
  users: User[];
  error: string | null;
}
