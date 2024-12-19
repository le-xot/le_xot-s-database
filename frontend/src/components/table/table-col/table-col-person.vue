<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tag } from '@/components/ui/tag'
import { computed, ref, toRef } from 'vue'
import { useTableCol } from '../composables/use-table-col'
import { useTablePersons } from '../composables/use-table-persons'
import TableCol from './table-col.vue'

type PersonValue = number | undefined

const props = defineProps<{ personId: PersonValue }>()
const emits = defineEmits<{ update: [PersonValue] }>()
const personId = toRef(props, 'personId')

const persons = useTablePersons()

const {
  isEdit,
  inputRef,
  inputValue,
  updateValue,
  handleChange,
  handleOpen,
} = useTableCol(personId, emits)

const currentPerson = computed(() => {
  return persons.persons?.find((p) => p.id === personId.value)
})

async function updatePerson(id: number, data: { name?: string, color?: string }) {
  persons.updatePerson(id, data)
}

async function handleColorChange(newColor: string) {
  if (currentPerson.value) {
    await updatePerson(currentPerson.value.id, { color: newColor })
  }
}

const color = ref('#ff0000')
const isPopoverOpen = ref(false)

function onColorChange(event: any) {
  color.value = event.target.value
}
</script>

// TODO https://www.shadcn-vue.com/docs/components/context-menu.html

<template>
  <TableCol @click="handleOpen">
    <div v-if="isEdit">
      <div class="flex items-center space-x-4">
        <Popover v-model:open="isPopoverOpen">
          <PopoverTrigger>
            <div :style="{ backgroundColor: currentPerson?.color }">
              {{ currentPerson?.name }}
            </div>
            <Button variant="ghost">
              <div
                :style="{ backgroundColor: color }"
                class="w-5 h-5 rounded-full"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <input
              v-model="color"
              type="color"
              class="w-full h-10 p-0 border-0 outline-none bg-transparent"
              @input="onColorChange"
            >
          </PopoverContent>
        </Popover>
      </div>
    </div>
    <template v-else>
      <Tag class="truncate w-48" :style="{ backgroundColor: currentPerson?.color }">
        {{ currentPerson?.name }}
      </Tag>
    </template>
  </TableCol>
</template>
