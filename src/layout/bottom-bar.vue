<template>
    <div class="h-[100dvh] w-full pb-24">
        <router-view></router-view>
        <app-bottom-bar />
    </div>
</template>

<script lang="ts" setup>
import AppBottomBar from '../components/app-bottom-bar.vue';

</script>

<style></style>