<template>
    <div :class="classBlur" class="h-[100dvh] w-full pb-24">
        <router-view></router-view>
        <app-bottom-bar />
    </div>
    <bottom-action-sheet v-show="isShowPaymentSystems.isShow" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import AppBottomBar from '../components/app-bottom-bar.vue';
import BottomActionSheet from '../components/bottom-action-sheet.vue';
import { useShowPaymentSystems } from '../store';

const isShowPaymentSystems = useShowPaymentSystems();

const classBlur = computed(() => ({
    'blur-sm': isShowPaymentSystems.isShow,
    'blur-0': !isShowPaymentSystems.isShow,
}));
</script>

<style></style>