<script setup>
import { Inbox, Star, Ban, Bookmark, Send, BookText, Trash2, RotateCcw, EllipsisVertical, Search } from 'lucide-vue-next';
import MailButtons from '@/components/MailButtons.vue';
import { ref } from 'vue';


const emailButtons = ref([
    {icon: Inbox, name: 'Inbox', number: 8, backgroundColor: 'bg-indigo-500', textColor: 'text-white', bgHover: 'hover:bg-indigo-600'},
    {icon: Star, name: 'Starred', number: 10, backgroundColor: '', textColor: '', bgHover: 'hover:bg-indigo-50'},
    {icon: Ban, name: 'Spam', number: 4, backgroundColor: '', textColor: '', bgHover: 'hover:bg-indigo-50'},
    {icon: Bookmark, name: 'Important', number: 4, backgroundColor: '', textColor: '', bgHover: 'hover:bg-indigo-50'},
    {icon: Send, name: 'Sent', number: 3, backgroundColor: '', textColor: '', bgHover: 'hover:bg-indigo-50'},
    {icon: BookText, name: 'Archived', number: 2, backgroundColor: '', textColor: '', bgHover: 'hover:bg-indigo-50'},
    {icon: Trash2, name: 'Trash', number: 1, backgroundColor: '', textColor: '', bgHover: 'hover:bg-indigo-50'}
])
</script>
<template>
    <div>
        <div class="border border-black grid grid-cols-6">
            <div class="border border-black bg-white px-6 overflow-x-auto">
                <div>
                    <button class="text-indigo-500 hover:bg-indigo-50 border border-indigo-500 p-2 mb-4">
                        Compose New
                    </button>
                </div>
                <div class="flex flex-col gap-4">
                    <MailButtons v-for="(info, index) in emailButtons" :key="`id-${index}`" :button="info" />
                </div>
            </div>
            <div class="border border-black col-span-5 h-40">
                <div class="border border-black flex items-center  overflow-x-auto">
                    <div class="border border-black min-w-80 p-2 flex flex-row gap-8">
                        <input class="h-5 w-5" type="checkbox">
                        <div><RotateCcw size="18"/></div>
                        <div><EllipsisVertical size="18"/></div>
                    </div>
                    <div class="border border-black min-w-80"></div>
                    <div class="relative border border-black min-w-80 flex justify-end">
                        <input class="border border-black pl-11 py-2" placeholder="Search Mail" type="text">
                        <button class="absolute left-24 top-2.5 text-gray-500"><Search/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>