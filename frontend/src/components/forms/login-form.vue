<script setup lang="ts">
import {
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NModal,
  useMessage,
} from 'naive-ui'

import { ref } from 'vue'
import { useUser } from '../../composables/useUser.ts'
import type {
  FormInst,
} from 'naive-ui'

const showModal = ref(false)

const { login, user } = useUser()

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

async function save(e: MouseEvent) {
  e.preventDefault()

  try {
    await formRef.value?.validate()
    await login(formValue.value.username, formValue.value.password)
    showModal.value = false
  } catch {
    message.error('Invalid')
  }
}

async function logout() {
  message.success('Logged out successfully')
}
</script>

<template>
  <NButton v-if="user" quaternary type="error" @click="logout">
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
          <NButton @click="save">
            Save
          </NButton>
        </NFormItem>
      </NForm>
    </NCard>
  </NModal>
</template>
