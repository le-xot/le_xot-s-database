<script setup lang="ts">
import { NH1, NH2, NText } from 'naive-ui';
</script>

<template>
  <n-h1>📜 Оценки:</n-h1>
  <n-h2 style="font-weight: bold">
    <n-text style="color: var(--color-gray)"
      >Если хотите обсудить оценку - милости прошу. Оценка не является финальной
      и может быть пересмотрена.
    </n-text>
  </n-h2>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-blue)">🔥 Рекомендую.</n-text>
    <n-text style="color: var(--color-gray)">
      Надеюсь, что это понравится всем. Произведения заслуживающие внимания.
    </n-text>
  </n-h2>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-green)">👍 Понравилось</n-text>
    <n-text style="color: var(--color-gray)">
      мне, но может не понравится вам. Больше вкусовщина.
    </n-text>
  </n-h2>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-yellow)">🍺 Под пивко</n-text>
    <n-text style="color: var(--color-gray)">
      пойдёт. Больше чем на один разочек не тянет, как не старайся.
    </n-text>
  </n-h2>
  <n-h2 style="font-weight: bold">
    <n-text underline style="color: var(--color-red)">👎 Не рекомендую</n-text>
    <n-text style="color: var(--color-gray)">
      и считаю это пустой тратой времени и недостойным проведением досуга.
    </n-text>
  </n-h2>
</template>

<style scoped></style>
