import { useUser } from '@/composables/use-user'
import { useMagicKeys } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { nextTick, Ref, ref, unref, watch } from 'vue'

export function useTableCol<T>(
  initialValue: Ref<T>,
  emits: (name: 'update', value: T) => void,
) {
  const { isAdmin } = storeToRefs(useUser())

  const isEdit = ref(false)
  const inputRef = ref<any>(null)
  const inputValue = ref(unref(initialValue))

  function updateValue(value: T) {
    inputValue.value = value
  }

  function handleOpen() {
    if (!isAdmin.value) return
    isEdit.value = true
    nextTick(() => {
      if (inputRef.value?.focus) {
        inputRef.value?.focus()
      } else {
        inputRef.value?.inputRef.focus()
      }
    },
    )
  }

  function handleClose() {
    isEdit.value = false
  }

  function handleChange(event: Event) {
    if (!isEdit.value && event.type === 'blur') return
    isEdit.value = false
    if (initialValue.value === inputValue.value) return
    emits('update', inputValue.value)
  }

  function handleUpdateValue(event: string) {
    if (initialValue.value === event) return
    emits('update', initialValue.value)
  }

  const { escape } = useMagicKeys()
  watch(escape, handleClose)

  return {
    isEdit,
    inputRef,
    inputValue,
    updateValue,
    handleOpen,
    handleClose,
    handleChange,
    handleUpdateValue,
  }
}
