<template>
    <div class="p-5 h-[23.75rem] w-full rounded-2xl bg-[#F8F8F8]">
        <div class="flex">
            <img class="h-[6.3rem]" src="@/assets/png/order.png" alt="">
            <div class="ml-5 flex flex-col justify-center">
                <h2 class="text-2xl font-bold">Order #98465</h2>
                <span class="text-xs font-normal">Category: caty_name</span>
            </div>
        </div>
        <hr class="mt-5 mb-8 h-[0.15rem] rounded-full border-[#4A9DFF] bg-[#4A9DFF]">

        <label class="w-min text-nowrap text-base font-montserrat font-medium">Paper
            Type</label>
        <order-drop-down :items="catalogList" class="bg-white" />

        <label class="w-min text-nowrap text-base font-montserrat font-medium">Quantity</label>
        <div class="mt-2 h-10 flex gap-4">
            <button @click="clickDecrease" class="w-16 h-full text-2xl rounded-md text-white bg-[#4A9DFF]">
                -
            </button>
            <input v-model="quantity" @input="inputQuantity"
                class="px-4 h-full w-full rounded-lg text-center text-lg border outline-blue-500" type="text"
                inputmode="numeric" placeholder="Max value - 99" maxlength="2">
            <button @click="clickIncrease" class="w-16 h-full text-xl rounded-md text-white bg-[#4A9DFF]">
                +
            </button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import OrderDropDown from '../components/order-drop-down.vue';

const quantity = ref(1);

const catalogList = [
    'Mate',
    'Glass',
    'Laminated',
    'Plast',
    'Woody',
];

const clickDecrease = () => {
    quantity.value--;
}

const clickIncrease = () => {
    quantity.value++;
}

const inputQuantity = () => {

    const isLetter = /[^\d]+/gi.test(quantity.value.toString());

    if (quantity.value < 0 || isLetter) quantity.value = 1;
}

</script>

<style></style>