<script setup lang="ts">
import { useUser } from '@src/composables/use-user.ts'
import { RolesEnum } from '@src/libs/api.ts'
import { onClickOutside } from '@vueuse/core'
import { NInput } from 'naive-ui'
import { onMounted, ref } from 'vue'

const props = defineProps<{ title: string }>()
const emit = defineEmits<{ update: [string] }>()
const isEdit = ref(false)
const model = ref()
const { user } = useUser()

onMounted(() => {
  model.value = props.title
})

async function save() {
  isEdit.value = false
  if (model.value === props.title) return
  emit('update', model.value)
}
const target = ref<HTMLDivElement | null>(null)

onClickOutside(target, () => {
  save()
})

function handleClick() {
  if (user.value?.role !== RolesEnum.ADMIN) return

  isEdit.value = true
}
</script>

<template>
  <div ref="target" style="padding: 0">
    <p v-if="!isEdit" class="title" @click="handleClick">
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
  height: 20px;
  width: 100%;
  margin: auto 0;
}
</style>
