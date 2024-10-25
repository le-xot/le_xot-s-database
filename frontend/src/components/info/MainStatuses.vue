<script setup lang="ts">
import { NH1, NH2, NText } from 'naive-ui';
</script>

<template>
  <n-h1>📌 Статусы:</n-h1>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-gray)">В очереди</n-text>
    <n-text style="color: var(--color-gray)"> - заказ ждёт своего часа.</n-text>
  </n-h2>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-blue)">Нет концовки</n-text>
    <n-text style="color: var(--color-gray)">
      — игра не имеет концовки (титров или логического завершения сюжета).
    </n-text>
  </n-h2>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-green)">Готово</n-text>
    <n-text style="color: var(--color-gray)">
      — игра была пройдена, а кинолента посмотрена.
    </n-text>
  </n-h2>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-yellow)">В процессе</n-text>
    <n-text style="color: var(--color-gray)">
      — заказ находится а стадии выполнения.
    </n-text>
  </n-h2>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-red)">Дроп</n-text>
    <n-text style="color: var(--color-gray)">
      — заказ не будет закончен до конца.
    </n-text>
  </n-h2>
</template>

<style scoped></style>
