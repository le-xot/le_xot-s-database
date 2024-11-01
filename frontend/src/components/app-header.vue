<script setup lang="ts">
import LoginForm from './forms/login-form.vue';
import { NButton } from 'naive-ui';

const routes = [
  { name: 'Очередь', path: '/db/queue' },
  { name: 'Игры', path: '/db/games' },
  { name: 'Видео', path: '/db/videos' },
];
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-nav">
        <div class="header-nav">
          <router-link
            custom
            v-slot="{ isActive, href, navigate }"
            v-for="route of routes"
            :key="route.name"
            :to="route.path"
          >
            <n-button
              tag="a"
              :href="href"
              @click="navigate"
              secondary
              :type="isActive ? 'success' : 'default'"
            >
              {{ route.name }}
            </n-button>
          </router-link>
        </div>
      </div>
      <LoginForm />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  height: var(--header-height);
  width: 100%;
  background-color: #0c0c0c;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
}

.header-nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
