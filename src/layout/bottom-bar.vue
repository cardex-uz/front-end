<template>
    <div class="relative h-screen w-full">
        <router-view></router-view>
        <app-bottom-bar />
    </div>
</template>

<script lang="ts" setup>
import AppBottomBar from '../components/app-bottom-bar.vue';

</script>

<style></style>