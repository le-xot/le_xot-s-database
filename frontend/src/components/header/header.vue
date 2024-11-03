<script setup lang="ts">
import { NButton } from 'naive-ui'
import LoginForm from './header-login-form.vue'

const routes = [
  { name: 'Очередь', path: '/db/queue' },
  { name: 'Игры', path: '/db/games' },
  { name: 'Видео', path: '/db/videos' },
]
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-nav">
        <div class="header-nav">
          <router-link
            v-for="route of routes"
            v-slot="{ isActive, href, navigate }"
            :key="route.name"
            custom
            :to="route.path"
          >
            <NButton
              tag="a"
              :href="href"
              secondary
              :type="isActive ? 'success' : 'default'"
              @click="navigate"
            >
              {{ route.name }}
            </NButton>
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
