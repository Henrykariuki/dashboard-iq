<script setup>
import { Menu, Settings, Search } from 'lucide-vue-next';
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';

const toggleMenu = inject('toggleMenu');

const route = useRoute(); 

const breadcrumbs = computed(()=> {
return route.path.replace('/', '')
.split('-')
.map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join(' / ');
})
</script>
<template>
<div class=" w-full h-20 flex justify-between items-center  px-7">
  <div class="section-one w-auto h-14 flex items-center">
    <div @click="toggleMenu" class="w-auto  mr-12 flex items-center p-2 border border-gray-100 rounded-full hover:bg-indigo-500 hover:text-white duration-200 ring-2 ring-indigo-300"><Menu size="19"/></div>
    <div class="w-auto h-6 flex items-center font-semibold text-gray-600"> {{breadcrumbs}}   </div>
  </div>
  <div class=" section-two w-auto mr-5 h-14 flex items-center justify-between">
    <div class="w-auto h-12 flex items-center">
      <input placeholder="Search" type="text" class="p-1 pl-6 w-56 border border-gray-400 rounded-2xl hover:border-indigo-500 duration-75">
    </div>
    <div class="h-6 w-auto ml-10 mr-10 flex items-center cursor-pointer"><Settings size="14"/></div>
    <div class="profile-pic w-8 h-9 flex items-center cursor-pointer">
      <img src="/images/image.jpg" class="w-8 h-8 rounded-3xl object-cover">
    </div>
  </div>
</div>
</template>
<style scoped>
</style>