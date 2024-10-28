<script setup>
import Messages from '../../components/Messages.vue'
import { Phone, EllipsisVertical, Check, Send, Smile } from 'lucide-vue-next';
import { ref } from 'vue';

const notification = ref([
    {image: '/images/steve.jpg', name: 'Steve Grace', text: 'I love coding...', activeMessage: 'bg-green-500', period: '4d' },
    {image: '/images/joram.jpg', name: 'Joram Moses', text: 'I love coding...', activeMessage: 'bg-yellow-500', period: '2d' },
    {image: '/images/james.jpg', name: 'James Carter', text: 'I like coding...', activeMessage: 'bg-red-500', period: '6d' },
    {image: '/images/steve.jpg', name: 'Steve Grace', text: 'I love coding...', activeMessage: 'bg-green-500', period: '4d' },
    {image: '/images/joram.jpg', name: 'Joram Moses', text: 'I love coding...', activeMessage: 'bg-yellow-500', period: '2d' },
])

const notify = ref([
    {image: '/images/steve.jpg', name: 'Steve Grace', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', time: '10:30', textTwo: null, notifybackground: 'bg-white'},
    {image: '/images/steve.jpg', name: 'Steve Grace', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', time: '10:30', textTwo: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', notifybackground: 'bg-indigo-200'}
]) 


</script>
<template>
    <div class="px-4 md:px-8 pb-6">
        <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg">
                <div class=" py-10 border-b border-gray-300 flex flex-col items-center gap-4">
                    <div>
                        <img class="w-20 h-20 shadow-lg object-cover rounded-full" src="/images/joram.jpg">
                    </div>
                    <p class="font-semibold text-xl">Joram Moses</p>
                </div>
                <div class="container p-4 ">
                    <div class="my-4">
                        <input class="p-2 rounded-md border border-gray-300 w-full" type="text" name="text" placeholder="Search">
                    </div>
                    <div class="flex flex-col gap-4">
                     <Messages v-for="(info, index) in notification" :key="`id-${index}`" :message-content="info"/>   
                    </div>
                </div>
            </div>
            <div class=" relative bg-white md:col-span-2 rounded-lg">
                <div class="flex absolute left-0 right-0 justify-between border-b border-gray-300 p-10">
                    <div class="flex flex-row gap-4">
                        <div>
                            <div class="relative">
                                <img class="w-14 h-14 object-cover rounded-full" src="/images/james.jpg">
                                <div class="absolute bg-gray-200 rounded-full p-0.5 right-1 bottom-0.5">
                                    <div class="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                                </div>
                            </div>  
                        </div>
                        <div>
                            <p class="font-semibold">Joram Moses</p>
                            <p class="text-gray-600">Last active 1 hour ago</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <button class="border border-gray-500 rounded-full p-3 text-gray-500"><Phone size="16"/></button>
                        <button class="border border-gray-500 rounded-full p-3 text-gray-500"><EllipsisVertical size="16"/></button>
                    </div>
                </div>
                <div class="mt-36 overflow-y-auto h-80">
                    <div v-for="(info, index) in notify" :key="`id-${index}`" class="flex flex-row gap-4 py-8 px-4">
                        <div>
                            <img class="w-14 h-14 rounded-full object-cover" :src="info.image">
                        </div>
                        <div class="flex flex-col gap-4">
                            <div class="font-semibold">{{ info.name }}</div>
                            <div class="text-gray-600 font-medium border border-gray-300 py-3 px-2 md:w-80 rounded-md">
                                {{ info.text }}
                            </div>
                            <div class="text-gray-600 flex flex-row gap-1 items-center">23:25<Check color="green" size="17"/></div>
                            <div :class="info.notifybackground" class="p-4 ml-10 rounded-md md:w-96 ">{{ info.textTwo }}</div>
                        </div>
                    </div>
                </div>
                <div class="py-32"></div>
                <div class="grid md:grid-cols-3 gap-4 items-center border-t border-gray-300 p-10">
                    <div class="col-span-2">
                        <input class="border border-gray-300 p-2 w-full rounded-md hover:border-indigo-500" placeholder="Type a message" type="text" name="text">
                    </div>
                    <div class="flex flex-row justify-between md:gap-4 items-center ">
                        <button class="bg-gray-500 py-4 px-5 rounded-md text-yellow-500"><Smile size="16" /></button>
                        <button class="bg-indigo-500 hover:bg-indigo-600 flex flex-row gap-1 text-white items-center py-3 px-4 rounded-md">
                            <Send size="16" />Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>