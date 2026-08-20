<template>
  <div class="app">
    <h1>Users</h1>
    <div class="users-list">
      <div v-for="user in users" :key="user.id" class="user-item">
        <div class="user-name">{{ user.name }}</div>
        <div class="user-email">{{ user.email }}</div>
        <div class="user-meta">
          <span class="badge">{{ user.role }}</span>
          <span class="status" :class="user.status">{{ user.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchUsers } from './api/mock.js'

const users = ref([])

onMounted(() => {
  fetchUsers().then((data) => {
    users.value = data
  })
})
</script>

<style scoped>
.app {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.users-list {
  display: grid;
  gap: 12px;
}

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

.badge {
  display: inline-block;
  padding: 2px 8px;
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
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
</style>
