<script setup>
import { EllipsisVertical } from 'lucide-vue-next';


defineProps({
    details: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="bg-white h-44 px-6 flex flex-col gap-4 justify-center rounded-md">
        <div class="flex flex-row gap-16 items-center">
            <div class=" border border-black font-semibold text-xl ">{{ details.name }}</div>
            <button class="p-3 hover:bg-gray-100 rounded-full"><EllipsisVertical size="14"/></button>
        </div>
        <div :class="details.level" class="h-1.5 rounded-full">
            <div :class="details.levelTwo" class="w-1/4 h-1.5 rounded-full"></div>
        </div>
        <div class="flex flex-row gap-14 font-medium">
            <p>{{ details.fileNumbers }}</p>
            <p>{{ details.freeSpace }}</p>
        </div>
    </div>
</template>