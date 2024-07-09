<script setup>
defineProps({
    PaymentsData: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="border-b border-gray-300 flex justify-between items-center px-2 py-2">
        <div class=" flex items-center w-28 py-3 text-md">{{ PaymentsData.name }}</div>
        <div class=" flex items-center w-28 py-3 text-md">${{PaymentsData.amount}}</div>
        <div class=" flex items-center w-28 py-3 text-md">{{ PaymentsData.date }}</div>
        <div class=" flex items-center w-28 h-6 pl-2 text-xs font-medium text-white rounded-md " :class="PaymentsData.backgroundcolor">
            {{ PaymentsData.status }}
        </div>
    </div>
</template>
<style scoped>
</style>