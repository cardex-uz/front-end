<template>
    <div class="w-28 flex flex-col">
        <button @click="clickDropdown"
            class="pl-3 pr-2 w-full h-full flex items-center justify-around border rounded-full border-[#1B91FF]">
            <span class="text-sm font-bold">Category</span>
            <svg :class="dropdown ? 'rotate-90' : 'rotate-0'"
                class="w-5 h-5 text-center fill-[#4A9DFF] transition-transform" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.29308 14.707C7.10561 14.5194 7.00029 14.2651 7.00029 14C7.00029 13.7348 7.10561 13.4805 7.29308 13.293L10.5861 9.99997L7.29308 6.70697C7.19757 6.61472 7.12139 6.50438 7.06898 6.38237C7.01657 6.26037 6.98898 6.12915 6.98783 5.99637C6.98668 5.86359 7.01198 5.73191 7.06226 5.60902C7.11254 5.48612 7.18679 5.37447 7.28069 5.28057C7.37458 5.18668 7.48623 5.11243 7.60913 5.06215C7.73202 5.01187 7.8637 4.98656 7.99648 4.98772C8.12926 4.98887 8.26048 5.01646 8.38249 5.06887C8.50449 5.12128 8.61483 5.19746 8.70708 5.29297L12.7071 9.29297C12.8946 9.4805 12.9999 9.73481 12.9999 9.99997C12.9999 10.2651 12.8946 10.5194 12.7071 10.707L8.70708 14.707C8.51955 14.8944 8.26525 14.9998 8.00008 14.9998C7.73492 14.9998 7.48061 14.8944 7.29308 14.707Z" />
            </svg>
        </button>
        <div class="relative">
            <div v-show="dropdown"
                class="w-56 overflow-hidden border-[#1B91FF] border animate-emerging ease-out absolute right-auto z-10 mt-2 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">

                <ul>
                    <li v-for="catalog in catalogList" :key="catalog">
                        <button
                            class="text-start flex gap-3 hover:bg-blue-200 hover:text-white w-full text-gray-700 px-4 py-3">
                            <span class="text-black">{{ catalog }}</span>
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <div @click="clickDropdown" :class="{ 'hidden': !dropdown }" class="absolute top-0 left-0 h-screen w-screen">
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dropdown = ref(false);

const catalogList = [
    'Clothes',
    'Avto',
    'Shop',
    'Food',
];

const clickDropdown = () => {
    dropdown.value = !dropdown.value;
};

</script>

<style></style>