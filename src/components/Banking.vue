<script setup>
import { MoveHorizontal, ArrowDownToLine, Send, DollarSign, Euro } from 'lucide-vue-next';
import BankingCard from './BankingCard.vue'
import { ref } from 'vue';
const details = ref([
    { id: 1, title: 'Debit Card', status: 'Balance', amount: '$2.000,00', serial: '*** *** *** 1412', fraction: '12/24' },
    { id: 2, title: 'Credit Card', status: 'Debt', amount: '$1.500,00', serial: '*** *** *** 2030', fraction: '10/18' } 
])
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
        <div class="border border-black h-52 col-start-1 col-span-2 px-6 bg-indigo-500 text-white">
            <div class=" border border-black w-auto h-auto  mt-6">
                <p class="font-bold leading-10 text-lg">Debit Card</p>
                <p class="font-semibold leading-6">Balance</p>
                <p class="font-bold text-2xl">$2.000,00</p>
                <div class="flex justify-between mt-8">
                    <p>*** *** *** 1421</p>
                    <p>12/34</p>
                </div>
            </div>
        </div>
       
        <div class="border border-black h-52  col-span-2 px-6 bg-white">
            <div class=" border border-black w-auto h-auto  mt-6">
                <p class="font-bold leading-10 text-lg">Credit Card</p>
                <p class="font-semibold leading-6 text-gray-700">Debt</p>
                <p class="font-bold text-2xl text-indigo-500">$1.600,00</p>
                <div class="flex justify-between mt-8">
                    <p class="text-gray-700">*** *** *** 1824</p>
                    <p class="text-gray-700">10/18</p>
                </div>
            </div>
        </div>
        <div class="border border-black h-52 flex justify-center bg-white">
            <div class="currency flex flex-col justify-center items-center">
                <p class="text-indigo-500 "><DollarSign size="32" /></p>
                <p class="font-medium mt-4 mb-6">Primary</p>
                <p class="text-indigo-500 font-bold text-2xl ">$56,000.00</p>
            </div>
        </div>
        <div class="border border-black h-52 flex justify-center bg-white">
            <div class="currency flex flex-col justify-center items-center">
                <p class="text-indigo-500 "> <Euro size="32"/></p>
                <p class="font-medium mt-4 mb-6">Currency</p>
                <p class="text-indigo-500 font-bold text-2xl ">$20,415.12</p>
            </div>
        </div>
        <div class="border border-black h-96 col-span-2"></div>
        <div class="border border-black h-96 col-span-4"></div>
        <div class="border border-black h-60 col-span-3"></div>
        <div class="border border-black h-60 col-span-3"></div>
    </div>
</div>
</template>
<style scoped>
</style>