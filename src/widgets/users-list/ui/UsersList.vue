<script setup lang="ts">
import { type Users } from '@/entities/users';
import UserCard from './UserCard.vue';

type Props = { users: Users };
defineProps<Props>();
</script>

<template>
  <div class="users-list">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :user
    />
  </div>
</template>

<style scoped>
.users-list {
  display: grid;
  gap: 12px;
}
</style>
