<script setup lang="ts">
import { useUser } from '@src/composables/use-user.ts'
import { RolesEnum, StatusesEnum } from '@src/libs/api.ts'
import { onClickOutside } from '@vueuse/core'
import { NSelect, NTag, NText, SelectOption } from 'naive-ui'
import { h, onMounted, ref } from 'vue'

const props = defineProps<{ status?: StatusesEnum }>()
const emit = defineEmits<{ update: [string] }>()
const isEdit = ref(false)
const model = ref()
const { user } = useUser()

onMounted(() => {
  model.value = props.status
})

async function save() {
  isEdit.value = false
  if (model.value === props.status) return
  emit('update', model.value)
}

const target = ref<HTMLDivElement | null>(null)

onClickOutside(target, () => {
  save()
})

const statusLabels: Record<
  StatusesEnum,
  {
    name: string
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
  }
> = {
  [StatusesEnum.QUEUE]: { name: 'В очереди', variant: 'default' },
  [StatusesEnum.UNFINISHED]: { name: 'Нет концовки', variant: 'info' },
  [StatusesEnum.DONE]: { name: 'Готово', variant: 'success' },
  [StatusesEnum.PROGRESS]: { name: 'В процессе', variant: 'warning' },
  [StatusesEnum.DROP]: { name: 'Дроп', variant: 'error' },
}
const selectOptions = Object.entries(statusLabels).map(([key, value]) => {
  return {
    label: value.name,
    value: key,
  }
})

function renderLabel(option: SelectOption) {
  if (!option.value) return
  return h(NText, {
    style: 'align-items: center',
    type: statusLabels[option.value as StatusesEnum].variant,
  }, { default: () => option.label })
}

function handleClick() {
  if (user.value?.role !== RolesEnum.ADMIN) return
  isEdit.value = true
}
</script>

<template>
  <div ref="target" style="padding: 0">
    <p v-if="!isEdit" class="status table-tag" @click="handleClick">
      <NTag
        v-if="status"
        style="width: 125px;   display: flex;
          justify-content: center;
          align-items: center "
        :type="statusLabels[status].variant"
        round
        :bordered="false"
      >
        {{ statusLabels[status].name }}
      </NTag>
    </p>
    <NSelect
      v-else
      v-model:value="model"
      :show-arrow="false"
      :show-checkmark="false"
      size="small"
      :options="selectOptions"
      :render-label="renderLabel"
      @update:value="save"
    />
  </div>
</template>

<style scoped>
.table-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
}
.status {
  height: 20px;
  width: 100%;
  margin: auto 0;
}
</style>
