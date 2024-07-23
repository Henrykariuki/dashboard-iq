<script setup>
import Messages from '../../components/Messages.vue'
import { Phone, EllipsisVertical } from 'lucide-vue-next';
import { ref } from 'vue';

const notification = ref([
    {image: '/images/steve.jpg', name: 'Steve Grace', text: 'I love coding...', activeMessage: 'bg-green-500', period: '4d' },
    {image: '/images/joram.jpg', name: 'Joram Moses', text: 'I love coding...', activeMessage: 'bg-yellow-500', period: '2d' },
    {image: '/images/james.jpg', name: 'James Carter', text: 'I like coding...', activeMessage: 'bg-red-500', period: '6d' },
    {image: '/images/steve.jpg', name: 'Steve Grace', text: 'I love coding...', activeMessage: 'bg-green-500', period: '4d' },
    {image: '/images/joram.jpg', name: 'Joram Moses', text: 'I love coding...', activeMessage: 'bg-yellow-500', period: '2d' },
])

</script>
<template>
    <div>
        <div class=" border border-black grid grid-cols-3 gap-4">
            <div class="bg-white">
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
            <div class=" relative bg-white h-96 col-span-2 ">
                <div class="">
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
                </div >
            </div>
        </div>
    </div>
</template>