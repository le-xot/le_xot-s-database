<script setup lang="ts">
import LayoutBody from '@src/layout/db/layout-body.vue'
import LayoutHeader from '@src/layout/db/layout-header.vue'
import { ROUTER_PATHS } from '@src/libs/router/router-paths.ts'
import { darkTheme, NButton, NConfigProvider, NMessageProvider, NResult } from 'naive-ui'
import { onMounted, onUnmounted, ref } from 'vue'

const isMobile = ref(false)

function updateScreenSize() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<template>
  <NConfigProvider :theme="darkTheme" class="layout-database">
    <NMessageProvider>
      <NResult
        v-if="isMobile"
        class="center"
        status="warning"
        title="Внимание!"
        description="Сайт временно недоступен на мобильных устройствах"
      >
        <div class="button-place">
          <router-link :to="ROUTER_PATHS.home" class="link">
            <NButton>
              На главную
            </NButton>
          </router-link>
        </div>
      </NResult>
      <template v-else>
        <LayoutHeader />
        <LayoutBody />
      </template>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped>
.button-place {
  display: flex;
}

.link{
  fill: #ffffff;
  display: block;
  border: none;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.center{
  width: 100%;
  height: 100dvh;
  display: flex;
  font-size: 100px;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
}

.layout-database {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  scrollbar-width: none;
}
</style>
