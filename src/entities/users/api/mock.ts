import { users } from './users.js';
import type { Users } from '../model';

// Переключи в true, чтобы проверить обработку ошибки
const SIMULATE_ERROR = false;

export function fetchUsers() {
  return new Promise<Users>((resolve, reject) => {
    setTimeout(() => {
      if (SIMULATE_ERROR) {
        reject(new Error('Failed to load users'));
      } else {
        resolve([...users]);
      }
    }, 750);
  });
}
