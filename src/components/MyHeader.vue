<script setup>
import { Menu, Settings, Search } from 'lucide-vue-next';
</script>
<template>
<div class="border border-black w-full h-20 flex justify-between items-center bg-neutral-100">
  <div class="section-one w-auto h-14 border border-black flex items-center">
    <div class="w-auto h-6 border border-black mr-12"><Menu/></div>
    <div class="w-auto h-6 border border-black flex items-center">E-Commerce-Dashboard</div>
  </div>
  <div class="section-two w-auto mr-5 h-14 border border-black flex items-center justify-between">
    <div class="w-auto h-12 flex items-center">
      <input placeholder="Search" type="text" class="p-1 pl-6 w-56 border border-gray-400 rounded-2xl hover:border-indigo-500 duration-75">
    </div>
    <div class="border border-black h-6 w-auto ml-10 mr-10 flex items-center"><Settings size="14"/></div>
    <div class="profile-pic w-8 h-9 border border-black flex items-center">
      <img src="/profile-pic/image.jpg" class="w-8 h-8 rounded-3xl object-cover">
    </div>
  </div>
</div>
</template>
<style scoped>
</style>