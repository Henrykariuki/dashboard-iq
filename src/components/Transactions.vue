<script setup>
defineProps({
    TransactionInfo: {
        type: Object,
        required: true
    }
})
</script>
<template>
<div>
    <div class="flex border-b border-gray-300 justify-center flex items-center pt-8 pb-4">
        <div class="photo-container">
            <img :src="TransactionInfo.image" class="w-14 h-14">
        </div>
        <div class="name ml-4 mr-2 ">
            <p class="font-semibold">{{ TransactionInfo.name }}</p>
            <p class="text-gray-700">{{ TransactionInfo.date }}</p>
        </div>
        <div class="price font-bold text-lg">${{ TransactionInfo.amount }}</div>
    </div>
</div>
</template>
<style scoped>
</style>