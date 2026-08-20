import type { UserRole, UserStatus } from '@/entities/users';

export type UsersFilters = {
  query: string;
  role: UserRole | null;
  status: UserStatus | null;
};
