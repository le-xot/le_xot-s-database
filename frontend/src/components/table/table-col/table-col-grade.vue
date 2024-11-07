<script setup lang="ts">
import { useUser } from '@src/composables/use-user.ts'
import { GradeEnum, RolesEnum } from '@src/libs/api.ts'
import { onClickOutside } from '@vueuse/core'
import { NSelect, NTag, NText, SelectOption } from 'naive-ui'
import { h, onMounted, ref } from 'vue'

const props = defineProps<{ grade?: GradeEnum }>()
const emit = defineEmits<{ update: [string] }>()
const isEdit = ref(false)
const model = ref()
const { user } = useUser()

onMounted(() => {
  model.value = props.grade
})

async function save() {
  isEdit.value = false
  if (model.value === props.grade) return
  emit('update', model.value)
}

const target = ref<HTMLDivElement | null>(null)

onClickOutside(target, () => {
  save()
})

const gradeLabels: Record<
  GradeEnum,
  {
    name: string
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
  }
> = {
  [GradeEnum.RECOMMEND]: { name: '🔥', variant: 'info' },
  [GradeEnum.LIKE]: { name: '👍', variant: 'success' },
  [GradeEnum.BEER]: { name: '🍺', variant: 'warning' },
  [GradeEnum.DISLIKE]: { name: '👎', variant: 'error' },
}

const selectOptions = Object.entries(gradeLabels).map(([key, value]) => {
  return {
    label: value.name,
    value: key,
  }
})

function renderLabel(option: SelectOption) {
  if (!option.value) return
  return h(NText, {
    style: 'display: flex; justify-content: center',
    type: gradeLabels[option.value as GradeEnum].variant,
  }, { default: () => option.label })
}

function handleClick() {
  if (user.value?.role !== RolesEnum.ADMIN) return
  isEdit.value = true
}
</script>

<template>
  <div ref="target" style="padding: 0">
    <p v-if="!isEdit" class="grades table-tag" @click="handleClick">
      <NTag
        v-if="grade"
        style="width: 125px;   display: flex;
          justify-content: center;
          align-items: center "
        :type="gradeLabels[grade].variant"
        round
        :bordered="false"
      >
        {{ gradeLabels[grade].name }}
      </NTag>
    </p>
    <NSelect
      v-else
      v-model:value="model"
      :show-arrow="false"
      :show-checkmark="false"
      style="display: flex; justify-content: center"
      size="small"
      show
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
.grades {
  height: 20px;
  width: 100%;
  margin: auto 0;
}
</style>
