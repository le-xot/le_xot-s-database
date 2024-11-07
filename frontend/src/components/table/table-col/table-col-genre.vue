<script setup lang="ts">
import { useUser } from '@src/composables/use-user.ts'
import { GenresEnum } from '@src/libs/api.ts'
import { onClickOutside } from '@vueuse/core'
import { NSelect, NTag, NText, SelectOption } from 'naive-ui'
import { h, onMounted, ref } from 'vue'

const props = defineProps<{ genre?: GenresEnum }>()
const emit = defineEmits<{ update: [string] }>()
const isEdit = ref(false)
const model = ref()
const { user } = useUser()

onMounted(() => {
  model.value = props.genre
})

async function save() {
  isEdit.value = false
  if (model.value === props.genre) return
  emit('update', model.value)
}

const target = ref<HTMLDivElement | null>(null)

onClickOutside(target, () => {
  save()
})

const genreLabels: Record<
  GenresEnum,
  {
    name: string
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
  }
> = {
  [GenresEnum.MOVIE]: { name: 'Фильм', variant: 'success' },
  [GenresEnum.SERIES]: { name: 'Сериал', variant: 'info' },
  [GenresEnum.ANIME]: { name: 'Аниме', variant: 'error' },
  [GenresEnum.CARTOON]: { name: 'Мультфильм', variant: 'warning' },
  [GenresEnum.GAMES]: { name: 'Игра', variant: 'primary' },
  [GenresEnum.NONE]: { name: 'Без жанра', variant: 'default' },
}
const selectOptions = Object.entries(genreLabels).map(([key, value]) => {
  return {
    label: value.name,
    value: key,
  }
})

function renderLabel(option: SelectOption) {
  if (!option.value) return
  return h(NText, {
    style: 'align-items: center',
    type: genreLabels[option.value as GenresEnum].variant,
  }, { default: () => option.label })
}

function handleClick() {
  if (!user.value) return
  isEdit.value = true
}
</script>

<template>
  <div ref="target" style="padding: 0">
    <p v-if="!isEdit" class="status table-tag" @click="handleClick">
      <NTag
        v-if="genre"
        style="width: 125px;   display: flex;
          justify-content: center;
          align-items: center "
        :type="genreLabels[genre].variant"
        round
        :bordered="false"
      >
        {{ genreLabels[genre].name }}
      </NTag>
    </p>
    <NSelect
      v-else
      v-model:value="model"
      :show-arrow="false"
      :show-checkmark="false"
      size="small"
      :options="selectOptions"
      :show="true"
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
  width: 100%;
  margin: auto 0;
}
</style>
