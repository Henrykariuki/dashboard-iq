<script setup>
import { ref } from 'vue';
import { Inbox, Star, Ban, Bookmark, Send, BookText, Trash2, } from 'lucide-vue-next';

const emailButtons = ref([
    {icon: Inbox, name: 'Inbox', number: 8, backgroundColor: 'bg-indigo-500', textColor: 'text-white', bgHover: 'hover:bg-indigo-600'},
    {icon: Star, name: 'Starred', number: 10, backgroundColor: 'bg-white', textColor: 'text-black', bgHover: 'hover:bg-indigo-50'},
    {icon: Ban, name: 'Spam', number: 4, backgroundColor: 'bg-white', textColor: 'text-black', bgHover: 'hover:bg-indigo-50'},
    {icon: Bookmark, name: 'Important', number: 4, backgroundColor: 'bg-white', textColor: 'text-black', bgHover: 'hover:bg-indigo-50'},
    {icon: Send, name: 'Sent', number: 3, backgroundColor: 'bg-white', textColor: 'text-black', bgHover: 'hover:bg-indigo-50'},
    {icon: BookText, name: 'Archived', number: 2, backgroundColor: 'bg-white', textColor: 'text-black', bgHover: 'hover:bg-indigo-50'},
    {icon: Trash2, name: 'Trash', number: 1, backgroundColor: 'bg-white', textColor: 'text-black', bgHover: 'hover:bg-indigo-50'}
])

</script>
<template>
    <div class="overflow-x-auto px-4 flex flex-col gap-4">
        <div>
            <button class="text-indigo-500 rounded-md hover:bg-indigo-50 border border-indigo-500 py-2 px-4 mb-4">
                Compose New
            </button>
        </div>
        <div v-for="(info, index) in emailButtons" :key="`id-${index}`">
            <button :class="`${info.backgroundColor} ${info.textColor} ${info.bgHover}`" 
            class=" p-2 flex items-center flex-row gap-4 rounded-md">
                <component :is="info.icon" size="16"/>
                <p class="font-medium">{{ info.name }}</p>
                <div class=" text-black py-0.5 px-2.5 rounded-full bg-indigo-50">{{ info.number }}</div>
            </button>
        </div>
    </div>
</template>