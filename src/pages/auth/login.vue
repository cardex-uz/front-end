<template>
    <div class="px-7 h-screen w-screen flex flex-col items-center justify-center">
        <img class="h-64" src="@/assets/svg/login.svg" alt="login-picture">
        <h4 class="my-16 text-3xl">Log in</h4>

        <div class="mb-5 relative w-full flex flex-col">
            <svg class="h-8 absolute left-4 top-4" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24.8438 26.25C22.3021 26.25 19.776 25.625 17.2656 24.375C14.7552 23.125 12.5 21.5 10.5 19.5C8.5 17.5 6.875 15.2448 5.625 12.7344C4.375 10.224 3.75 7.69792 3.75 5.15625C3.75 4.76042 3.88542 4.42708 4.15625 4.15625C4.42708 3.88542 4.76042 3.75 5.15625 3.75H9.53125C9.82292 3.75 10.0781 3.84896 10.2969 4.04687C10.5156 4.24479 10.6562 4.51042 10.7188 4.84375L11.5625 8.78125C11.6042 9.07292 11.599 9.33854 11.5469 9.57812C11.4948 9.81771 11.3854 10.0208 11.2188 10.1875L8.09375 13.3438C9.26042 15.2812 10.5677 16.9688 12.0156 18.4062C13.4635 19.8438 15.1042 21.0625 16.9375 22.0625L19.9062 19C20.1146 18.7708 20.3542 18.6094 20.625 18.5156C20.8958 18.4219 21.1667 18.4062 21.4375 18.4688L25.1562 19.2812C25.4688 19.3438 25.7292 19.5 25.9375 19.75C26.1458 20 26.25 20.2917 26.25 20.625V24.8438C26.25 25.2396 26.1146 25.5729 25.8438 25.8438C25.5729 26.1146 25.2396 26.25 24.8438 26.25ZM7.15625 11.625L9.6875 9.0625L8.96875 5.625H5.625C5.625 6.4375 5.75 7.32812 6 8.29688C6.25 9.26562 6.63542 10.375 7.15625 11.625ZM24.375 24.375V21.0312L21.1562 20.375L18.6875 22.9688C19.5417 23.3646 20.4687 23.6875 21.4688 23.9375C22.4688 24.1875 23.4375 24.3333 24.375 24.375Z"
                    fill="#989898" />
            </svg>

            <input v-maska data-maska="+998 ## ### ## ##" v-model="phoneFiled" type="text" id="phone-number"
                class="bg-transparent  text-xl border pl-14 w-full h-16 rounded-full peer outline-none ring-1 focus:ring-2 ring-blue-400"
                :class="phoneFieldFlag ? 'ring-1 border-pink-600 text-pink-600 dark:text-pink-600 ring-pink-600' : 'focus:ring-1 focus:ring-blue-600 focus:border-blue-500'"
                @focus="focusPhoneField" @focusout="focusoutPhoneField" @input="inputPhoneField"
                placeholder="+998 ** *** ** **" inputmode="tel">

            <p v-show="phoneFieldFlag" class="pt-1 pl-4 font-montserrat font-medium text-base text-red-500">
                Некорректный ввод
                номера</p>
        </div>

        <button @click="clickLogin" :disabled="disabledLoginBtn"
            class="w-full py-5 text-xl rounded-full disabled:bg-slate-400 text-white bg-[#2D82FF]">
            Login
        </button>
    </div>
</template>

<script lang="ts" setup>
import { vMaska } from "maska";
import { ref } from "vue";
import { router } from "../../router";

const phoneFiled = ref('');
const phoneFieldFlag = ref(false);
const disabledLoginBtn = ref(true);

const phoneRegx = /^\+998\s(97|90|99|88|93|95|77|91|50|33|20|94|98)\s\d{3}\s\d{2}\s\d{2}$/;

const focusPhoneField = () => {
    if (phoneFiled.value.length === 0) phoneFiled.value = '+998 ';
}

const inputPhoneField = () => {
    if (phoneRegx.test(phoneFiled.value)) {
        disabledLoginBtn.value = false;
        phoneFieldFlag.value = false;
    }
}

const focusoutPhoneField = () => {
    if (!phoneRegx.test(phoneFiled.value)) phoneFieldFlag.value = true;
    else phoneFieldFlag.value = false;

    if (phoneFiled.value === '+998 ') {
        phoneFiled.value = '';
        phoneFieldFlag.value = false;
    }
}

const clickLogin = () => {
    router.push('/auth/verify/');
}

</script>

<style></style>