<script setup lang="ts">
import LoginForm from '@src/components/form/login-form.vue'
import { useTitle } from '@src/composables/use-title'
import { ROUTER_PATHS } from '@src/libs/router/router-paths.ts'
import { NButton } from 'naive-ui'
import { onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const { updateTitle } = useTitle()

const routes = [
  { name: 'Главная', path: ROUTER_PATHS.home },
  { name: 'Очередь', path: ROUTER_PATHS.dbQueue },
  { name: 'Игры', path: ROUTER_PATHS.dbGames },
  { name: 'Видео', path: ROUTER_PATHS.dbVideos },
]

onMounted(() => {
  const routeData = routes.find((item) => item.path === route.path)
  if (routeData) updateTitle(routeData.name)
})
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-nav">
        <div class="header-nav">
          <RouterLink
            v-for="headerRoute of routes"
            v-slot="{ isActive, href, navigate }"
            :key="headerRoute.name"
            custom
            :to="headerRoute.path"
          >
            <NButton
              tag="a"
              :href="href"
              secondary
              :type="isActive ? 'success' : 'default'"
              @click="(event) => {
                navigate(event)
                updateTitle(headerRoute.name)
              }"
            >
              {{ headerRoute.name }}
            </NButton>
          </RouterLink>
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
  background-color: var(--header-color);
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
