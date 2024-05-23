<template>
    <div id="bottom-action-sheet" @click="clickOutside" class="fixed top-0 w-full h-full bg-opacity-50 bg-black">
        <div
            class="animate-move z-10 flex flex-col items-center px-10 absolute bottom-0 w-full h-52 rounded-t-[3.125rem] bg-white">
            <hr class="mt-5 mb-8 w-36 border-2 rounded-full border-[#CCCCCC]">
            <div class="w-full flex justify-between">
                <button class="border-2 rounded-[1.35rem]">
                    <img class="h-24" src="@/assets/svg/payme.svg" alt="">
                </button>
                <button class="border-2 rounded-[1.35rem]">
                    <img class="h-24" src="@/assets/svg/click.svg" alt="">
                </button>
                <button class="border-2 rounded-[1.35rem]">
                    <img class="h-24" src="@/assets/svg/zoomrad.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useShowPaymentSystems } from '../store';

const clickOutside = (e: Event) => {
    const target = e.target as HTMLDivElement;

    if (target.id === 'bottom-action-sheet') {
        useShowPaymentSystems().isShow = false;
    }
}
</script>

<style></style>