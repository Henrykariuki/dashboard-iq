<script setup>
import { Type } from 'lucide-vue-next';

defineProps({
    RecentInfo: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="border border-gray-300 md:w-52 flex flex-row gap-2 px-2 items-center  rounded-md cursor-pointer hover:bg-gray-100 duration-75">
        <img :src="RecentInfo.image" class="w-8 h-8 object-cover rounded-full "><p class=" font-medium">{{ RecentInfo.name }}</p>
    </div>
</template>
<style scoped>
</style>