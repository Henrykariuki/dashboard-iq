<script setup>
import { Plus, MessageCircle, Paperclip, Clock3, EllipsisVertical  } from 'lucide-vue-next';
</script>
<template>
    <div class="p-8">
        <div class="bg-white rounded-md h-96">
            <div class="flex justify-between">
                <p class="font-semibold text-lg ">Task List</p>
                <button
                 class="text-indigo-500 rounded-md flex flex-row gap-2 items-center border border-indigo-500 hover:bg-indigo-50 py-2 px-4">
                    <Plus size="20"/>
                    <p>Create Task</p>
                </button>
            </div>
            <div class="font-semibold">ToDo</div>
            <div class="flex justify-between items-center border border-black">
                <div class="flex flex-row gap-2 items-center">
                    <input class="w-5 h-5" type="checkbox">
                    <label class="font-medium text-gray-700">Create a New Landing UI</label>
                </div>
                <div class="flex flex-row gap-4">
                    <div class="flex flex-row gap-1 items-center text-gray-700"><MessageCircle size="16" /><p class="font-medium">5</p></div>
                    <div class="flex flex-row gap-1 items-center text-gray-700"><Paperclip size="16"/><p class="font-medium">2</p></div>
                    <div class="flex flex-row gap-1 items-center text-gray-700"><Clock3 size="16"/><p class="font-medium">03:00</p></div>
                </div>
                <div class="flex flex-row gap-6 items-center  px-2">
                    <div class="relative w-32 h-12 flex ">
                        <div class="absolute right-0 bottom-0.5 z-20 bg-white p-0.5 rounded-full "><img class="w-10 h-10 object-cover rounded-full" src="/images/joram.jpg"></div>
                        <div class="absolute right-7 bottom-0.5 z-10 bg-white p-0.5 rounded-full"><img class="w-10 h-10 object-cover rounded-full" src="/images/james.jpg"></div>
                        <div class="absolute right-14 bottom-0.5  bg-white p-0.5 rounded-full"><img class="w-10 h-10 object-cover rounded-full" src="/images/steve.jpg"></div>
                    </div>
                    <button class="p-3 rounded-full hover:bg-gray-100">
                        <EllipsisVertical size="16"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>