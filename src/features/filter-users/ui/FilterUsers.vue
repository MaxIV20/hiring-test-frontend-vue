<script setup lang="ts">
import { computed } from 'vue';
import { STATUS_OPTIONS, ROLE_OPTIONS } from '../constants';
import type { UserRole, UserStatus } from '@/entities/users';
import { type UsersFilters } from '../model/user-filter.types';

const model = defineModel<UsersFilters>({ required: true });

const search = computed({
  get() {
    return model.value?.query ?? '';
  },
  set(value: string) {
    model.value = { ...model.value, query: value };
  },
});

const role = computed({
  get() {
    return model.value?.role ?? '';
  },
  set(value: UserRole) {
    model.value = { ...model.value, role: value };
  },
});

const status = computed({
  get() {
    return model.value?.status ?? '';
  },
  set(value: UserStatus) {
    model.value = { ...model.value, status: value };
  },
});
</script>

<template>
  <div class="filter-container">
    <input
      v-model="search"
      placeholder="Введите имя или почту"
    />
    <select v-model="role">
      <option
        v-for="roleOpt in ROLE_OPTIONS"
        :key="roleOpt"
        :value="roleOpt"
      >
        {{ roleOpt }}
      </option>
    </select>
    <select v-model="status">
      <option
        v-for="statusOpt in STATUS_OPTIONS"
        :key="statusOpt"
        :value="statusOpt"
      >
        {{ statusOpt }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  gap: 10px;
}
</style>
