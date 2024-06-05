<script setup>
import { Menu, Settings, Search } from 'lucide-vue-next';
</script>
<template>
<div class=" w-full h-20 flex justify-between items-center">
  <div class="section-one w-auto h-14 flex items-center">
    <div class="w-auto h-6 border border-black mr-12"><Menu/></div>
    <div class="w-auto h-6 flex items-center font-semibold text-gray-600">E-Commerce-Dashboard</div>
  </div>
  <div class="section-two w-auto mr-5 h-14 flex items-center justify-between">
    <div class="w-auto h-12 flex items-center">
      <input placeholder="Search" type="text" class="p-1 pl-6 w-56 border border-gray-400 rounded-2xl hover:border-indigo-500 duration-75">
    </div>
    <div class="h-6 w-auto ml-10 mr-10 flex items-center"><Settings size="14"/></div>
    <div class="profile-pic w-8 h-9 flex items-center">
      <img src="/images/image.jpg" class="w-8 h-8 rounded-3xl object-cover">
    </div>
  </div>
</div>
</template>
<style scoped>
</style>