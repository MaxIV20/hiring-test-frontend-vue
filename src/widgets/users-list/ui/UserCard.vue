<script lang="ts" setup>
import { type User } from '@/entities/users';

type Props = { user: User };

defineProps<Props>();
</script>

<template>
  <div class="user-item">
    <div class="user-name">{{ user.name }}</div>
    <div class="user-email">{{ user.email }}</div>
    <div class="user-meta">
      <span class="badge">{{ user.role }}</span>
      <span
        class="status"
        :class="user.status"
      >
        {{ user.status }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.user-item {
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #f9f9f9;
}

.user-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.user-email {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.user-meta {
  display: flex;
  gap: 8px;
}

.status {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.status.active {
  background: #e8f5e9;
  color: #388e3c;
}

.status.inactive {
  background: #ffebee;
  color: #d32f2f;
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}
</style>
