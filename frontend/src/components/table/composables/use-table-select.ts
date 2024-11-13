import { GenresEnum, GradeEnum, StatusesEnum } from '@src/libs/api'
import { NText } from 'naive-ui'
import { SelectBaseOption } from 'naive-ui/es/select/src/interface'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { h } from 'vue'

export interface TagOptions {
  name: string
  label?: string
  description?: string
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
  [StatusesEnum.QUEUE]: {
    name: 'В очереди',
    description: 'заказ ждёт своего часа.',
    variant: 'default',
  },
  [StatusesEnum.UNFINISHED]: {
    name: 'Нет концовки',
    description: 'игра не имеет концовки (титров или логического завершения сюжета).',
    variant: 'info',
  },
  [StatusesEnum.DONE]: {
    name: 'Готово',
    description: 'игра выполнена, а кинолента посмотрена.',
    variant: 'success',
  },
  [StatusesEnum.PROGRESS]: {
    name: 'В процессе',
    description: 'заказ находится а стадииолнения.',
    variant: 'warning',
  },
  [StatusesEnum.DROP]: {
    name: 'Дроп',
    description: 'заказ не будет закончен до конца.',
    variant: 'error',
  },
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
  [GradeEnum.RECOMMEND]: {
    name: '🔥',
    label: 'Рекомендую',
    description: 'надеюсь, что это понравится всем. Произведения заслуживающие внимания.',
    variant: 'info',
  },
  [GradeEnum.LIKE]: {
    name: '👍',
    label: 'Понравилось',
    description: 'мне, но может не понравится вам. Больше вкусовщина.',
    variant: 'success',
  },
  [GradeEnum.BEER]: {
    name: '🍺',
    label: 'Под пивко',
    description: 'пойдёт. Больше чем на один разочек не тянет, как не старайся.',
    variant: 'warning',
  },
  [GradeEnum.DISLIKE]: {
    name: '👎',
    label: 'Не рекомендую',
    description: 'и считаю это пустой тратой времени и недостойным проведением досуга.',
    variant: 'error',
  },
}

export const useTableSelect = defineStore('use-table-select', () => {
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
        label: `${value.name} ${value.label}`,
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
  import.meta.hot.accept(acceptHMRUpdate(useTableSelect, import.meta.hot))
}
