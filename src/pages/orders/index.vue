<template>
    <div class="px-7 pt-10 space-y-4">
        <order />
        <button @click="clickPayment"
            class="pl-6 pr-5 h-[3.125rem] w-full flex items-center justify-between rounded-[1.25rem] bg-[#F8F8F8]">
            <span>Payment</span>
            <svg class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14" fill="none">
                <path d="M1 13L7 7L0.999999 1" stroke="#4A9DFF" stroke-width="2" stroke-linecap="round" />
            </svg>
        </button>
        <button class="w-full h-[3.125rem] text-base font-bold rounded-[1.25rem] text-white bg-[#4A9DFF]">Enter</button>
    </div>
</template>

<script lang="ts" setup>
import Order from '../../components/order.vue';
import { useShowPaymentSystems } from '../../store';

const isShowPaymentSystems = useShowPaymentSystems();

const clickPayment = () => {
    isShowPaymentSystems.isShow = true;
}

</script>

<style></style>