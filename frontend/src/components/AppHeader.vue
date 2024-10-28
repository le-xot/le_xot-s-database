<script setup lang="ts">
import { NGradientText } from 'naive-ui';
import LoginForm from './forms/LoginForm.vue';
</script>

<template>
  <LoginForm />
  <div align="center" style="background-color: rgb(24, 24, 28)">
    <n-gradient-text
      gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
      font-size="65px"
      style="font-weight: 800"
    >
      Крутой сайт Лешота
    </n-gradient-text>
  </div>
</template>
