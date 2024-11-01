<script setup lang="ts">
import { NH2 } from 'naive-ui';
</script>

<template>
  <div class="grades">
    <n-h2>📜 Оценки:</n-h2>
    <span>
      Если хотите обсудить оценку - милости прошу. Оценка не является финальной
      и может быть пересмотрена.
    </span>
    <p>
      <span style="color: var(--color-blue); text-decoration-line: underline"
        >🔥 Рекомендую.</span
      >
      Надеюсь, что это понравится всем. Произведения заслуживающие внимания.
    </p>
    <p>
      <span style="color: var(--color-green); text-decoration-line: underline"
        >👍 Понравилось</span
      >
      мне, но может не понравится вам. Больше вкусовщина.
    </p>
    <p>
      <span style="color: var(--color-yellow); text-decoration-line: underline"
        >🍺 Под пивко</span
      >
      пойдёт. Больше чем на один разочек не тянет, как не старайся.
    </p>
    <p>
      <span style="color: var(--color-red); text-decoration-line: underline"
        >👎 Не рекомендую</span
      >
      и считаю это пустой тратой времени и недостойным проведением досуга.
    </p>
  </div>
</template>

<style scoped>
.grades {
  background-color: #0c0c0c;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
p {
  margin: 0;
}
</style>
