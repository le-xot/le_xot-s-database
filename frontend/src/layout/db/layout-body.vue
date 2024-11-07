<script setup lang="ts">
</script>

<template>
  <div class="content">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
}

.container {
  width: 80dvw;
  margin-right: auto;
  margin-left: auto;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
