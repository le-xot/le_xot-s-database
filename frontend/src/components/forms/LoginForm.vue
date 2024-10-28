<script setup lang="ts">
import { ref } from 'vue';
import {
  FormInst,
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NModal,
} from 'naive-ui';
import { useApi } from '../../composables/useApi.ts';

const showModal = ref(false);

const api = useApi();

const formRef = ref<FormInst | null>(null);
const formValue = ref({
  username: '',
  password: '',
});

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
};

async function save(e: MouseEvent) {
  e.preventDefault();
  await formRef.value?.validate();
  const req = await api.auth.authControllerLogin(formValue.value);
  if (req.ok) {
    showModal.value = false;
  }
}
</script>

<template>
  <n-button @click="showModal = true">Login</n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="Modal"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-form
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="rules"
      >
        <n-form-item label="Username" path="username">
          <n-input v-model:value="formValue.username" placeholder="Username" />
        </n-form-item>
        <n-form-item label="Password" path="password">
          <n-input v-model:value="formValue.password" placeholder="Password" />
        </n-form-item>
        <n-form-item>
          <n-button @click="save"> Save</n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </n-modal>
</template>
