<script setup lang="ts">
import LoginForm from '@src/components/form/login-form.vue'
import { ROUTES_PATHS } from '@src/libs/router/router-paths.ts'
import { NButton } from 'naive-ui'
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-nav">
        <div class="header-nav">
          <router-link
            v-for="route of ROUTES_PATHS"
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
  background-color: #0c0c0c;
  width: 100%;
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
