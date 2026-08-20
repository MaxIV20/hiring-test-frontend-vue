import type { UsersFilters } from './user-filter.types';
import { computed, ref, type Ref, watch } from 'vue';
import { type Users } from '@/entities/users';
import { debounce } from '@/shared/utils';

export function useFilterUsers(users: Ref<Users | undefined>) {
  const filters: Ref<UsersFilters> = ref({
    query: '',
    role: null,
    status: null,
  });
  const debouncedQuery = ref(filters.value.query);
  const updateDebouncedQuery = debounce((query: string) => {
    debouncedQuery.value = query;
  }, 300);

  watch(
    () => filters.value.query,
    (query, _, onCleanup) => {
      if (filters.value.query === '') {
        debouncedQuery.value = query;
      } else {
        updateDebouncedQuery(query);
      }
      onCleanup(updateDebouncedQuery.cancel);
    },
  );

  const filteredUsers = computed<Users>(() => {
    const { status, role } = filters.value;
    const query = debouncedQuery.value.toLowerCase();
    return (
      users.value?.filter((u) => {
        const matchQuery =
          u.name.toLowerCase().includes(query) ||
          u.email.toLowerCase().includes(query);
        const matchRole = role ? u.role === role : true;
        const matchStatus = status ? u.status === status : true;
        return matchQuery && matchRole && matchStatus;
      }) ?? []
    );
  });

  function resetFilters() {
    filters.value = {
      query: '',
      role: null,
      status: null,
    };
  }

  return { filteredUsers, filters, resetFilters };
}
