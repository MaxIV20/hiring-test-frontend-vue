import { defineStore } from 'pinia';
import { ref, computed, type Ref } from 'vue';

import { fetchUsers } from '../api';
import type { User } from './users.types';

export const useUsersStore = defineStore('users', () => {
  // Вообще лучше использовать tanstack query, но по тз непонятно,
  // можно ли тянуть сторонние либы или нет, поэтому сделал вручную
  const users: Ref<User[] | undefined> = ref();
  const usersError = ref<Error | null>(null);
  const isUsersLoading = computed(() => !users.value && !usersError.value);

  async function getUsers() {
    try {
      users.value = await fetchUsers();
    } catch (er) {
      console.error(er);

      if (er instanceof Error) {
        usersError.value = er;
      }
    }
  }

  getUsers();

  function refetchUsers() {
    usersError.value = null;
    getUsers();
  }

  return { users, usersError, isUsersLoading, refetchUsers };
});
