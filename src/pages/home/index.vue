<template>
    <div class="px-7 overflow-y-scroll h-full w-full scrollbar-hide">
        <h3 class="pt-9 text-3xl font-bold">News</h3>
        <div class="w-full pt-4 flex gap-2 overflow-x-scroll scrollbar-hide">
            <img v-for="img in newsImgs" :src="img" class="h-32 w-28 rounded-xl" alt="">
        </div>
        <h3 class="sticky top-0 pt-8 pb-7 w-full text-3xl font-bold bg-white">My card</h3>
        <div class="w-full h-full space-y-7">
            <card v-for="n in 4" :key="n" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Card from '../../components/card.vue';

const newsImgs = [
    '/src/assets/png/news-item-1.png',
    '/src/assets/png/news-item-2.png',
    '/src/assets/png/news-item-3.png',
    '/src/assets/png/news-item-4.png',
];
</script>

<style></style>