<script setup>
import { } from 'lucide-vue-next';

defineProps({
    properties: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="border border-black  flex flex-row justify-between py-4 px-2 rounded-md">
        <div class="text-gray-600"><component :is="properties.icon" /></div>
        <div class="font-medium">{{ properties.name }}</div>
        <div class="text-gray-600 font-medium">{{ properties.number }}</div>
    </div>
</template>