<script setup lang="ts">
import { useUser } from '@src/composables/use-user.ts'
import {
  FormInst,
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NModal,
  useMessage,
} from 'naive-ui'
import { ref } from 'vue'

const showModal = ref(false)
const { login, logout, user } = useUser()
const formRef = ref<FormInst | null>(null)
const message = useMessage()
const formValue = ref({
  username: '',
  password: '',
})

const rules = {
  username: {
    required: true,
    message: 'Please input your username',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: 'Please input your password',
    trigger: ['input'],
  },
}

async function saveCookie(e: MouseEvent) {
  e.preventDefault()

  try {
    await formRef.value?.validate()
    await login(formValue.value.username, formValue.value.password)
    showModal.value = false
    message.success('Login success')
  } catch {
    message.error('Invalid')
  }
}

async function deleteCookie() {
  try {
    await logout()
    message.success('Logout success')
  } catch {
    message.error('Logout error')
  }
}
</script>

<template>
  <NButton v-if="user" quaternary type="error" @click="deleteCookie">
    Logout
  </NButton>
  <NButton v-else quaternary type="primary" @click="showModal = true">
    Login
  </NButton>
  <NModal v-model:show="showModal">
    <NCard
      style="width: 600px"
      title="Modal"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <NForm
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="rules"
      >
        <NFormItem label="Username" path="username">
          <NInput v-model:value="formValue.username" placeholder="Username" />
        </NFormItem>
        <NFormItem label="Password" path="password">
          <NInput v-model:value="formValue.password" placeholder="Password" />
        </NFormItem>
        <NFormItem>
          <NButton @click="saveCookie">
            Save
          </NButton>
        </NFormItem>
      </NForm>
    </NCard>
  </NModal>
</template>
