<script setup>
import { Calendar } from 'lucide-vue-next';
defineProps({
    details: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div>
        <div class="">
            <hr class="h-1" :class="details.backgroundcolor">
            <p :class="details.color" class="font-medium my-2 text-blue-500">{{ details.title }}</p>
            <div>
                <p class="font-medium text-xl">
                    {{ details.subtitle }}
                </p>
            </div>
            <div class="mt-6 mb-4">
                <p class="text-gray-700">
                   {{ details.text }}
                </p>
            </div>
            <div class="flex flex-row gap-2 items-center">
                <div class="profile-pic ">
                    <img class="w-8 h-8 rounded-full object-cover" :src="details.image">
                </div>
                <div>
                    <p class="font-bold text-sm">{{ details.name }}</p>
                    <div class="flex flex-row gap-1 text-gray-700 items-center">
                        <Calendar size="14" /> <p class=" text-sm">{{ details.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>