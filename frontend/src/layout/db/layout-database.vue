<script setup lang="ts">
import LayoutBody from '@src/layout/db/layout-body.vue'
import LayoutHeader from '@src/layout/db/layout-header.vue'
import { ROUTER_PATHS } from '@src/libs/router/router-paths.ts'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { darkTheme, NButton, NConfigProvider, NMessageProvider, NResult } from 'naive-ui'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')
</script>

<template>
  <NConfigProvider :theme="darkTheme" class="layout-database">
    <NMessageProvider>
      <NResult
        v-if="isMobile"
        title="Внимание!"
        size="huge"
        class="notif"
        description="Кладовка Лешота временно недоступна на мобильных устройствах"
      >
        <template #icon>
          <img src="/images/aga.webp">
        </template>

        <template #footer>
          <router-link :to="ROUTER_PATHS.home">
            <NButton>
              На главную
            </NButton>
          </router-link>
        </template>
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

.notif {
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.layout-database {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  overflow: auto;
  scrollbar-width: none;
}
</style>
