<script setup>
import { comment } from 'postcss';

defineProps({
    content: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="border border-gray-300 rounded-md flex flex-row gap-4 p-4">
        <div ><img class="w-12 h-12 rounded-full object-cover" :src="content.image"></div>
        <div>
            <div>
                <p class="font-semibold text-lg">{{ content.name }}</p>
                <p class="text-gray-700 font-medium text-sm">{{ content.date }}</p>
            </div>
            <p class="text-gray-700 mt-4">{{ content.text }}</p>
        </div>
    </div>
</template>