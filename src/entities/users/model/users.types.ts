export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
};

export type Users = User[];

export type UserRole = 'admin' | 'manager' | 'viewer';

export type UserStatus = 'active' | 'inactive';
