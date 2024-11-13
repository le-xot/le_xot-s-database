import { GenresEnum, GradeEnum, StatusesEnum } from '@src/libs/api'
import { NText } from 'naive-ui'
import { SelectBaseOption } from 'naive-ui/es/select/src/interface'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { h } from 'vue'

export interface TagOptions {
  name: string
  variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
}

export type SelectKind = 'genre' | 'status' | 'grade'

type StatusesOptions = SelectBaseOption<StatusesEnum>
type GradesOptions = SelectBaseOption<GradeEnum>
type GenresOptions = SelectBaseOption<GenresEnum>

export const statusTags: Record<
  StatusesEnum,
  TagOptions
> = {
  [StatusesEnum.QUEUE]: { name: 'В очереди', variant: 'default' },
  [StatusesEnum.UNFINISHED]: { name: 'Нет концовки', variant: 'info' },
  [StatusesEnum.DONE]: { name: 'Готово', variant: 'success' },
  [StatusesEnum.PROGRESS]: { name: 'В процессе', variant: 'warning' },
  [StatusesEnum.DROP]: { name: 'Дроп', variant: 'error' },
}

export const genreTags: Record<
  GenresEnum,
  TagOptions
> = {
  [GenresEnum.MOVIE]: { name: 'Фильм', variant: 'success' },
  [GenresEnum.SERIES]: { name: 'Сериал', variant: 'info' },
  [GenresEnum.ANIME]: { name: 'Аниме', variant: 'error' },
  [GenresEnum.CARTOON]: { name: 'Мультфильм', variant: 'warning' },
}

export const gradeTags: Record<
  GradeEnum,
  TagOptions
> = {
  [GradeEnum.RECOMMEND]: { name: '🔥', variant: 'info' },
  [GradeEnum.LIKE]: { name: '👍', variant: 'success' },
  [GradeEnum.BEER]: { name: '🍺', variant: 'warning' },
  [GradeEnum.DISLIKE]: { name: '👎', variant: 'error' },
}

export const useSelect = defineStore('table/use-select', () => {
  const tags: Record<SelectKind, Record<string, TagOptions>> = {
    status: statusTags,
    genre: genreTags,
    grade: gradeTags,
  }

  const options: Record<SelectKind, SelectBaseOption[]> = {
    status: Object.entries(statusTags).map(([key, value]) => {
      return {
        label: value.name,
        value: key,
      }
    }),
    genre: Object.entries(genreTags).map(([key, value]) => {
      return {
        label: value.name,
        value: key,
      }
    }),
    grade: Object.entries(gradeTags).map(([key, value]) => {
      return {
        label: value.name,
        value: key,
      }
    }),
  }

  function renderLabel(
    option: StatusesOptions | GenresOptions | GradesOptions,
    kind: SelectKind,
  ) {
    if (!option.value) return
    return h(NText, {
      style: 'align-items: center',
      type: tags[kind][option.value].variant,
    }, { default: () => option.label })
  }

  return {
    gradeTags,
    statusTags,
    genreTags,
    options,
    renderLabel,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSelect, import.meta.hot))
}
