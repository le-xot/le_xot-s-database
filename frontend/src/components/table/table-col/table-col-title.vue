<script setup lang="ts">
import { useUser } from '@src/composables/use-user.ts'
import { onClickOutside } from '@vueuse/core'
import { NInput } from 'naive-ui'
import { onMounted, ref } from 'vue'

const props = defineProps<{ title: string }>()
const emit = defineEmits<{ 'title-update': [string] }>()
const isEdit = ref(false)
const model = ref()
const { user } = useUser()

onMounted(() => {
  model.value = props.title
})

async function save() {
  isEdit.value = false
  if (model.value === props.title) return
  emit('title-update', model.value)
}
const target = ref<HTMLDivElement | null>(null)

onClickOutside(target, () => {
  save()
})
</script>

<template>
  <div ref="target" style="padding: 0">
    <p v-if="!isEdit && user" class="title" @click="isEdit = true">
      {{ model }}
    </p>
    <NInput v-else-if="user" v-model:value="model" class="input no-padding" size="small" @keydown.enter="save" />
    <p v-else class="title">
      {{ model }}
    </p>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}

.title {
  width: 100%;
  margin: auto 0;
}
</style>
