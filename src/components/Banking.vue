<script setup>
import { MoveHorizontal, ArrowDownToLine,Send } from 'lucide-vue-next';
</script>
<template>
<div>
    <div class="w-full h-24 border border-black flex justify-between items-center">
        <div class="profile-info flex justify-between items-center">
            <div class="photo-container border border-black w-auto h-16 flex ">
                <img src="/images/image.jpg" class="w-14 h-14 rounded-full object-cover">
                <div class="ml-4">
                    <p class="font-bold text-3xl">Welcome Joram</p>
                    <p class="text-gray-600">Your last login was on 06/23/2024 at 12:09 pm</p>
                </div>
            </div>
        </div>
        <div class="photo-text border border-black flex w-auto h-16 items-center">
                <button class="border border-indigo-500 w-10 h-10 rounded-full flex items-center justify-center text-indigo-500"><MoveHorizontal size="16" /></button>
                <button class="border border-indigo-500 w-10 h-10 rounded-full ml-2 mr-2 flex items-center justify-center text-indigo-500 "><ArrowDownToLine size="16" /></button>
                <button class="border border-indigo-500 w-10 h-10 rounded-full flex items-center justify-center bg-indigo-500 text-white"><Send size="16" /></button>
        </div>
    </div>
    <div class="banking-dashboard-grid w-full h-auto grid grid-cols-6 pb-20">
        <div class="border border-black h-52 col-start-1 col-span-2"></div>
        <div class="border border-black h-52  col-span-2"></div>
        <div class="border border-black h-52"></div>
        <div class="border border-black h-52"></div>
        <div class="border border-black h-96 col-span-2"></div>
        <div class="border border-black h-96 col-span-4"></div>
        <div class="border border-black h-60 col-span-3"></div>
        <div class="border border-black h-60 col-span-3"></div>
    </div>
</div>
</template>
<style scoped>
</style>