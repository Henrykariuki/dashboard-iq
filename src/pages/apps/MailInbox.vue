<script setup>
import { Inbox, Star, Ban, Bookmark, Send, Booktext, Trash2 } from 'lucide-vue-next';
import { ref } from 'vue';

const mailButtons = ref([
    {icon: Inbox, name: 'Inbox', number: 8},
    {icon: Star, name: 'Starred', number: 10},
    {icon: Ban, name: 'Spam', number: 4},
    {icon: Bookmark, name: 'Important', number: 4},
    {icon: Send, name: 'Sent', number: 3},
    {icon: Booktext, name: 'Archived', number: 2},
    {icon: Trash2, name: 'Trash', number: 1}
])
</script>
<template>
    <div>
        <div class="border border-black grid grid-cols-4">
            <div class="border border-black bg-white h-40">
                <div>
                    <button class="text-indigo-500 border border-indigo-500 p-2">
                        Compose New
                    </button>
                </div>
                <div class="">
                    <button class="border border-black hover:bg-gray-50 p-2 flex items-center flex-row gap-4 rounded-md">
                        <Star size="16"/>
                        <p class="font-medium">Starred</p>
                        <div class=" py-0.5 px-2.5 rounded-full bg-indigo-50">7</div>
                    </button>
                </div>
            </div>
            <div class="border border-black col-span-3 h-40"></div>
        </div>
    </div>
</template>