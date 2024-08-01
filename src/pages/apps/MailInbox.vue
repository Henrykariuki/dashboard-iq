<script setup>
import {  Star,  Bookmark,  RotateCcw, EllipsisVertical, Search } from 'lucide-vue-next';
import MailButtons from '@/components/MailButtons.vue';
import { ref } from 'vue';





const emails = ref([
    {image: '/images/james.jpg', name: 'James Carter', text: 'Eget ipsum quam eu a, sit pellentesque molestie tristique...', date: '16 Jun 2024'},
    {image: '/images/steve.jpg', name: 'steve Grace', text: 'Consequat sed nibh laoreet ultrices at elit tellus, nunc. Nequ...', date: '16 Jun 2024'},
    {image: '/images/joram.jpg', name: 'Joram moses', text: 'Consectetur sed dis viverra lorem. Augue felis sed elit rhoncu...', date: '16 Jun 2024'},
    {image: '/images/james.jpg', name: 'James Carter', text: 'Eget ipsum quam eu a, sit pellentesque molestie tristique...', date: '16 Jun 2024'},
    {image: '/images/steve.jpg', name: 'steve Grace', text: 'Consequat sed nibh laoreet ultrices at elit tellus, nunc. Nequ...', date: '16 Jun 2024'},
    {image: '/images/joram.jpg', name: 'Joram moses', text: 'Consectetur sed dis viverra lorem. Augue felis sed elit rhoncu...', date: '16 Jun 2024'},
    {image: '/images/james.jpg', name: 'James Carter', text: 'Eget ipsum quam eu a, sit pellentesque molestie tristique...', date: '16 Jun 2024'},
    {image: '/images/steve.jpg', name: 'steve Grace', text: 'Consequat sed nibh laoreet ultrices at elit tellus, nunc. Nequ...', date: '16 Jun 2024'},
    {image: '/images/joram.jpg', name: 'Joram moses', text: 'Consectetur sed dis viverra lorem. Augue felis sed elit rhoncu...', date: '16 Jun 2024'},
    
])


</script>
<template>
    <div class="p-8">
        <div class="bg-white p-8 rounded-lg">
            <div class=" pt-10  grid grid-cols-6 gap-8">
                    <div >
                        <MailButtons/>
                    </div>
                <div class="col-span-5 bg-white overflow-x-auto">
                    <div class=" w-full border-b border-gray-300 py-4  bg-gray-100 flex items-center  ">
                        <div class=" min-w-80 p-2 flex flex-row gap-5">
                            <input class="h-5 w-5" type="checkbox">
                            <div><RotateCcw size="18"/></div>
                            <div><EllipsisVertical size="18"/></div>
                        </div>
                        <div class=" min-w-72"></div>
                        <div class="relative min-w-80 flex ">
                            <input class=" pl-11 py-2 border border-gray-300 transition duration-150 hover:border-indigo-500 rounded-md" placeholder="Search Mail" type="text">
                            <button class="absolute left-2 top-2.5 text-gray-500"><Search/></button>
                        </div>
                    </div>
                    <div v-for="(info, index) in emails" :key="`id-${index}`"
                    class="container hover:bg-gray-100  flex flex-row gap-2 jusify-between border-b border-gray-300 py-4 ">
                        <div class="flex flew-row gap-2   ">
                            <div class="  p-2 flex items-center flex-row gap-5">
                                <input class="h-4 w-4" type="checkbox">
                                <div><Star size="18"/></div>
                                <div><Bookmark size="18"/></div>
                            </div>
                            <div class="flex items-center  ">
                                <div><img class="w-8 h-8 object-cover rounded-full" :src="info.image"></div>
                                <p class="font-semibold text-lg ml-2 text-nowrap">{{ info.name }}</p>
                            </div>
                        </div>
                        <div class="  text-nowrap pl-2 w-full font-medium text-gray-700 flex items-center">
                            <p>{{ info.text }}</p>
                        </div>
                        <div class="text-nowrap flex items-center">
                            <p class="font-medium text-gray-700">{{ info.date }}</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>