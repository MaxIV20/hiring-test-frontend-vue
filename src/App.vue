<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { FilterUsers, useFilterUsers } from '@/features/filter-users';
import { UsersList } from '@/widgets/users-list';
import { useUsersStore } from '@/entities/users';

const store = useUsersStore();
const { users, isUsersLoading, usersError } = storeToRefs(store);
const { filters, filteredUsers, resetFilters } = useFilterUsers(users);
</script>

<template>
  <div class="app">
    <h1>Users</h1>

    <div v-if="isUsersLoading">Loading...</div>

    <div v-else-if="usersError">
      <div>{{ usersError }}</div>
      <button
        type="button"
        @click="store.refetchUsers"
      >
        Refetch
      </button>
    </div>

    <template v-else>
      <FilterUsers
        v-model="filters"
        @on-reset="resetFilters"
      />
      <UsersList :users="filteredUsers" />
    </template>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}
</style>
