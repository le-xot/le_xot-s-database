<script setup lang="ts">

const props = defineProps<{
    title: string
}>()


</script>

<template>  
    <div class="card-content">
        <div class="card-content-title">{{ title }}</div>
        <div class="card-list">
            <slot/>
        </div>
    </div>
</template>

<style scoped>

.card-content {
  width: 100%;
  height: 100%;
  min-height: 5em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  font-size: 25px;
  color: white;
}


.card-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
}


</style>