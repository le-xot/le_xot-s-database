<script setup lang="ts">
import { computed } from 'vue'
import { GenresEnum } from '@src/libs/api.ts'
import TableColGenre from '@src/components/table/table-col/table-col-genre.vue'

const props = defineProps<{
    title: string
    genre: string
    customer: string
}>()

const genre = computed(() => {
    if (props.genre === undefined) return GenresEnum.GAMES
    return props.genre
})
</script>

<template>
    <div class="card">
        <span class="card-title">{{ props.title }}</span>
        <span class="card-underline"></span>
        <div class="card-info">
            <div class="card-customer">{{ customer }}</div>
            <div class="card-order-type">
                <TableColGenre style="justify-content: flex-start" :genre="genre" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 10em;
    height: 100%;
    background-color: #1F1F1F;
    display: flex;
    flex-direction: column;
    padding: 1em;
    border: 1px solid #414141;
    border-radius: 3px;
    box-sizing: border-box;
}

@media (max-width: 5em) {
  .card{
    padding: 1em;
    font-size: 14px;
  }
}

.card-title {
    height: 1.5em;
    max-height: 5em;
    font-size: 18px;
    font-weight: bold;
    text-wrap: balance;
    overflow: hidden;
    overflow-wrap: break-word;
}

.card-underline {
    width: 100%;
    height: 1px;
    margin-top: 1em;
    background-color: #414141;
}

.card-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 1em;
}

.card-customer {
    margin-left: 2px;
}

.card-order-type {
    margin-right: 2px;
}

</style>