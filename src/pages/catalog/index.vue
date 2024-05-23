<template>
    <div class="px-7 pt-4 h-full w-full">
        <div class="my-5 flex justify-between h-11">
            <category-drop-down />
            <search class="w-48" />
            <app-filter />
        </div>

        <div class="h-[78dvh] pb-4 space-y-5 overflow-y-scroll scrollbar-hide">
            <card-template v-for="n in 7" :key="n" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import CategoryDropDown from '../../components/category-drop-down.vue';
import Search from '../../components/search.vue';
import AppFilter from '../../components/app-filter.vue';
import CardTemplate from '../../components/card-template.vue';

</script>

<style></style>