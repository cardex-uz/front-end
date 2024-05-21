<template>
    <h3 class="text-3xl">Verify</h3>
    <otp-input-fields v-model="code" />
    <button :disabled="disabledBtn"
        class="w-full py-5 rounded-full text-xl text-white disabled:bg-slate-400 bg-[#4A9DFF]">Enter</button>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import OtpInputFields from '../../components/otp-input-fields.vue';

const code = ref<string[]>(Array(4).fill(''));

const disabledBtn = computed(() => {
    return code.value[3].length === 0;
});

</script>

<style></style>