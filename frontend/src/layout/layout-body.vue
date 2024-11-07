<script setup lang="ts">
import { NScrollbar } from 'naive-ui'
</script>

<template>
  <div class="content">
    <div class="container">
      <NScrollbar>
        <RouterView />
      </NScrollbar>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  min-height: 92vh;
  background-color: rgb(24, 24, 28);
}

.container {
  width: 75dvw;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
