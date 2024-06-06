<script setup>
 //define the following props: title, value, change percentage, positive change
 import { Plus, ArrowUp, ArrowDown } from 'lucide-vue-next';
 defineProps({
    stats: {
        type: Object,
        required: true
    }
 })
 </script>
<template>
<div class="rounded-lg bg-white h-40">
    <div class=" ml-8 mt-4 flex flex-col justify-start">
        <p class="font-bold text-lg text-gray-600 mb-3">{{stats.title}}</p>
        <p class="font-bold text-3xl mb-2">{{stats.value}}</p>
        <div :class="`flex items-center ${stats.positivechange ? 'text-green-500' : 'text-red-500'}` ">
            <Plus   size="13" />
            <p class="mr-1">{{stats.changePercentage}}</p>
            <ArrowUp v-if="stats.positivechange" size="13"/>
            <ArrowDown v-else="stats.positivechange" size="13"/>
        </div>
    </div>
</div>
</template>
<style scoped>
</style>