import { GenresEnum, GradeEnum, StatusesEnum } from '@/lib/api.ts'
import { acceptHMRUpdate, defineStore } from 'pinia'

export interface BadgeOptions {
  name: string
  label?: string
  description?: string
  class: string
}

export type SelectKind = 'genre' | 'status' | 'grade'

export const statusTags: Record<
  StatusesEnum,
  BadgeOptions
> = {
  [StatusesEnum.QUEUE]: {
    name: 'В очереди',
    description: 'заказ ждёт своего часа.',
    class: 'bg-[#333333] border px-2.5 text-white/80',
  },
  [StatusesEnum.UNFINISHED]: {
    name: 'Нет концовки',
    description: 'игра не имеет концовки (титров или логического завершения сюжета).',
    class: 'bg-[#28456c] border px-2.5 text-white/80',
  },
  [StatusesEnum.DONE]: {
    name: 'Готово',
    description: 'игра выполнена, кинолента посмотрена.',
    class: 'bg-[#2b593f] border px-2.5 text-white/80',
  },
  [StatusesEnum.PROGRESS]: {
    name: 'В процессе',
    description: 'заказ находится на стадии выполнения.',
    class: 'bg-[#89632a] border px-2.5 text-white/80',
  },
  [StatusesEnum.DROP]: {
    name: 'Дроп',
    description: 'заказ не будет закончен до конца.',
    class: 'bg-[#6e3630] border px-2.5 text-white/80',
  },
}

export const genreTags: Record<
  GenresEnum,
  BadgeOptions
> = {
  [GenresEnum.MOVIE]: { name: 'Фильм', class: 'bg-[#2b593f] border px-2.5 text-white/80' },
  [GenresEnum.SERIES]: { name: 'Сериал', class: 'bg-[#28456c] border px-2.5 text-white/80',
  },
  [GenresEnum.ANIME]: { name: 'Аниме', class: 'bg-[#6e3630] text-white/80' },
  [GenresEnum.CARTOON]: { name: 'Мультфильм', class: 'bg-[#89632a] border px-2.5 text-white/80' },
}

export const gradeTags: Record<
  GradeEnum,
  BadgeOptions
> = {
  [GradeEnum.RECOMMEND]: {
    name: '🔥',
    label: 'Рекомендую',
    description: 'надеюсь, что это понравится всем. Произведения заслуживающие внимания.',
    class: 'bg-[#28456c] border px-2.5',
  },
  [GradeEnum.LIKE]: {
    name: '👍',
    label: 'Понравилось',
    description: 'мне, но может не понравится вам. Больше вкусовщина.',
    class: 'bg-[#2b593f] border px-2.5',
  },
  [GradeEnum.BEER]: {
    name: '🍺',
    label: 'Под пивко',
    description: 'пойдёт. Больше чем на один разочек не тянет, как не старайся.',
    class: 'bg-[#89632a] border px-2.5',
  },
  [GradeEnum.DISLIKE]: {
    name: '👎',
    label: 'Не рекомендую',
    description: 'и считаю это пустой тратой времени и недостойным проведением досуга.',
    class: 'bg-[#6e3630] border px-2.5',
  },
}

export const useTableSelect = defineStore('use-table-select', () => {
  const options: Record<SelectKind, { label: string, value: string }[]> = {
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

  return {
    gradeTags,
    statusTags,
    genreTags,
    options,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTableSelect, import.meta.hot))
}
