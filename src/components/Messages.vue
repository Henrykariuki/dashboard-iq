<script setup>
defineProps({
    messageContent: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="border border-gray-300 flex justify-between p-4 items-center rounded-md">
        <div class="flex flex-row gap-4">
            <div class="relative">
                <img class="w-10 h-10 rounded-full shadow-2xl object-cover" :src="messageContent.image">
                <div class="absolute bg-gray-200 rounded-full p-0.5 right-1 bottom-0.5">
                    <div :class="`${messageContent.activeMessage}`" class="w-2.5 h-2.5 rounded-full"></div>
                </div>
            </div>
            <div>
                <p class="font-semibold">{{ messageContent.name }}</p>
                <p class="text-sm text-gray-600">{{ messageContent.text }}</p>
            </div>
        </div>
        <div class="font-semibold text-gray-800">
            {{ messageContent.period }}
        </div>
    </div>
</template>