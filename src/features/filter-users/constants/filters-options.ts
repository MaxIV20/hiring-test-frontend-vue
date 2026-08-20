import type { UserRole, UserStatus } from '@/entities/users';

export const ROLE_OPTIONS: UserRole[] = ['admin', 'viewer', 'manager'];
export const STATUS_OPTIONS: UserStatus[] = ['active', 'inactive'];
