<script setup lang="ts">
import { NH2 } from 'naive-ui';
</script>

<template>
  <div class="status">
    <n-h2>📌 Статусы:</n-h2>
    <p>
      <span style="color: var(--color-gray); text-decoration-line: underline">
        В очереди
      </span>
      - заказ ждёт своего часа.
    </p>
    <p>
      <span style="color: var(--color-blue); text-decoration-line: underline">
        Нет концовки
      </span>
      - игра не имеет концовки (титров или логического завершения сюжета).
    </p>
    <p>
      <span style="color: var(--color-green); text-decoration-line: underline">
        Готово
      </span>
      - игра выполнена, а кинолента посмотрена.
    </p>
    <p>
      <span style="color: var(--color-yellow); text-decoration-line: underline">
        В процессе
      </span>
      - заказ находится а стадииолнения.
    </p>
    <p>
      <span style="color: var(--color-red); text-decoration-line: underline">
        Дроп
      </span>
      - заказ не будет закончен до конца.
    </p>
  </div>
</template>

<style scoped>
.status {
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
