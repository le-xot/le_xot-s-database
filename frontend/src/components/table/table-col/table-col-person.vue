<script setup lang="ts">
import { usePersons } from '@src/composables/use-persons.ts'
import { useUser } from '@src/composables/use-user.ts'
import { PersonEntity, RolesEnum } from '@src/libs/api.ts'
import { onClickOutside } from '@vueuse/core'
import { NSelect } from 'naive-ui'
import { SelectBaseOption } from 'naive-ui/es/select/src/interface'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{ person?: PersonEntity | null }>()
const emit = defineEmits<{ update: [number] }>()
const { user } = useUser()
const isEdit = ref(false)
const model = ref()
const { persons, create } = usePersons()

const selectOptions = computed(() => {
  if (!persons.value) return []
  return persons.value.map((item) => {
    return { label: item.name, value: item.id }
  })
})

async function onSelect(_value: any, option: SelectBaseOption) {
  if (typeof option.value === 'string') {
    const person = await create(option.value)
    model.value = person.data.id
    console.log(model.value)
    await save()
  } else {
    model.value = option.value
    await save()
  }
}

onMounted(() => {
  if (!props.person) return
  model.value = props.person.id
})

async function save() {
  isEdit.value = false
  if (model.value === props.person?.id) return
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
  <div ref="target">
    <p v-if="!isEdit" class="person" @click="handleClick">
      {{ person?.name }}
    </p>
    <NSelect
      v-else
      v-model:value="model"
      show
      tag
      filterable
      :show-arrow="false"
      :show-checkmark="false"
      size="small"
      :options="selectOptions"
      @update:value="onSelect"
    />
  </div>
</template>

<style scoped>
.person {
  height: 20px;
  width: 100%;
  margin: auto 0;
}
</style>
