<script setup>
import { MoveHorizontal, ArrowDownToLine, Send, DollarSign, Euro, Plus } from 'lucide-vue-next';
import BankingCard from './BankingCard.vue'
import Transactions from './Transactions.vue'
import  LineChart  from './LineChart.vue';
import { ref } from 'vue';
import RecentTransactions from './RecentTransactions.vue'
import MonthlyPayments from './MonthlyPayments.vue'

const details = ref([
    { id: 1, title: 'Debit Card', status: 'Balance', amount: '$2.000,00', serial: '*** *** *** 1412', fraction: '12/24' },
    { id: 2, title: 'Credit Card', status: 'Debt', amount: '$1.500,00', serial: '*** *** *** 2030', fraction: '10/18' } 
])

const TransactionInfo = ref([
    {id: 1, image: '/images/airbnb.jpg', name: 'Airbnb', date: '6/16/2024', amount: 300.00},
    {id: 2, image: '/images/amazon.jpg', name: 'Amazon', date: '10/3/2024', amount: 340.00},
    {id: 3, image: '/images/nike.jpg', name: 'Nike', date: '8/10/2024', amount: 240.00},
    {id: 4, image: '/images/starbucks.jpg', name: 'Starbucks', date: '4/5/2024', amount: 100.00},
    {id: 5, image: '/images/amazon.jpg', name: 'Amazon', date: '1/10/2024', amount: 50.00}
])

const RecentInfo = ref([
    {id: 1, image: '/images/james.jpg', name: 'Sean James'},
    {id: 2, image: '/images/joram.jpg', name: 'Moses Joram'},
    {id: 3, image: '/images/steve.jpg', name: 'Steve Grace'},
    {id: 4, image: '/images/james.jpg', name: 'Sean James'},
    {id: 5, image: '/images/joram.jpg', name: 'Moses Joram'},
    {id: 6, image: '/images/steve.jpg', name: 'Steve Grace'},
    
])

const PaymentsData = ref([
    {id: 1, name: 'Electric Bill', amount: 85.00, date: '6/27/2024', status: 'COMPLETED', backgroundcolor: 'bg-green-500'},
    {id: 2, name: 'Water Bill', amount: 60.55, date: '6/30/2024', status: 'COMPLETED', backgroundcolor: 'bg-green-500'},
    {id: 3, name: 'Gas Bill', amount: 45.25, date: '7/7/2024', status: 'PENDING', backgroundcolor: 'bg-orange-500'},
    {id: 4, name: 'Internet Bill', amount: 90.45, date: '7/14/2024', status: 'COMPLETED', backgroundcolor: 'bg-green-500'},
    {id: 5, name: 'Streaming', amount: 75.78, date: '7/20/2024', status: 'PENDING', backgroundcolor: 'bg-orange-500'}     
])

</script>
<template>
<div class=" px-8">
    <div class="w-full h-24  flex justify-between items-center">
        <div class="profile-info flex justify-between items-center">
            <div class="photo-container  w-auto h-16 flex ">
                <img src="/images/image.jpg" class="w-14 h-14 rounded-full object-cover">
                <div class="ml-4">
                    <p class="font-bold text-3xl">Welcome Joram</p>
                    <p class="text-gray-600">Your last login was on 06/23/2024 at 12:09 pm</p>
                </div>
            </div>
        </div>
        <div class="photo-text  flex w-auto h-16 items-center">
                <button class="group relative border border-indigo-500 w-10 h-10 rounded-full  flex items-center justify-center text-indigo-500">
                    <MoveHorizontal size="16" />
                    <div class=" opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-black absolute bg-gray-700 text-white rounded-md  -bottom-12 p-2 " data-tooltip-target="bottom-tooltip">Exchange</div>
                </button>
                <button class=" group relative border border-indigo-500 w-10 h-10 rounded-full ml-2 mr-2 flex items-center justify-center text-indigo-500 ">
                    <ArrowDownToLine size="16" />
                    <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-12 p-2 rounded-lg bg-gray-700 text-white">Withdraw</div>
                </button>
                <button class="group relative border border-indigo-500 w-10 h-10 rounded-full flex items-center justify-center bg-indigo-500 text-white">
                    <Send size="16" />
                    <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-12 p-2 bg-gray-700 text-white rounded-lg ">Send</div>
                </button>
        </div>
    </div>
    <div class="banking-dashboard-grid w-full h-auto grid grid-cols-6 pb-20 gap-8 ">
        <div class=" h-52 col-start-1 col-span-2 px-6 bg-indigo-500 text-white rounded-xl">
            <div class=" w-auto h-auto  mt-6">
                <p class="font-bold leading-10 text-lg">Debit Card</p>
                <p class="font-semibold leading-6">Balance</p>
                <p class="font-bold text-2xl">$2.000,00</p>
                <div class="flex justify-between mt-8">
                    <p>*** *** *** 1421</p>
                    <p>12/34</p>
                </div>
            </div>
        </div>
       
        <div class=" h-52  col-span-2 px-6 bg-white rounded-xl">
            <div class=" w-auto h-auto  mt-6">
                <p class="font-bold leading-10 text-lg">Credit Card</p>
                <p class="font-semibold leading-6 text-gray-700">Debt</p>
                <p class="font-bold text-2xl text-indigo-500">$1.600,00</p>
                <div class="flex justify-between mt-8">
                    <p class="text-gray-700">*** *** *** 1824</p>
                    <p class="text-gray-700">10/18</p>
                </div>
            </div>
        </div>
        <div class=" h-52 flex justify-center bg-white rounded-xl">
            <div class="currency flex flex-col justify-center items-center">
                <p class="text-indigo-500 "><DollarSign size="32" /></p>
                <p class="font-medium mt-4 mb-6">Primary</p>
                <p class="text-indigo-500 font-bold text-2xl ">$56,000.00</p>
            </div>
        </div>
        <div class=" h-52 flex justify-center bg-white rounded-xl">
            <div class="currency flex flex-col justify-center items-center">
                <p class="text-indigo-500 "> <Euro size="32"/></p>
                <p class="font-medium mt-4 mb-6">Currency</p>
                <p class="text-indigo-500 font-bold text-2xl ">$20,415.12</p>
            </div>
        </div>
        <div class=" col-span-2 px-8 py-8 bg-white rounded-xl">
            <div class="text-xl font-semibold w-auto">
                 Recent Transactions
            </div>
           <Transactions v-for="(info, index) in TransactionInfo" :key="info.id" :TransactionInfo="info"/>
        </div>
        <div class=" col-span-4 bg-white rounded-xl">
            <LineChart></LineChart>
        </div>
        <div class=" h-auto col-span-3 bg-white px-4  rounded-xl">
            <div class=" flex justify-between mt-4 px-2 py-3">
                <p class="font-semibold text-xl">Recent Transactions</p>
                <button class="border border-indigo-500 hover:bg-indigo-50 text-sm font-medium flex items-center py-2 px-3 rounded-md text-indigo-500">
                    <Plus class="pr-2"/>Add New
                </button>
            </div>
            <div class="w-auto h-60 grid grid-cols-2 gap-4 justify-items-center">
                <RecentTransactions v-for="(info, index) in RecentInfo" :key="info.id" :RecentInfo="info"/>
            </div>
            <div class=" flex justify-between px-2 py-6">
                <input type="text" class=" mr-2 border border-black py-2 px-2 w-80 rounded-md border-gray-400 hover:border-indigo-500 duration-75">
                <button class=" px-5 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 duration-100">Send</button>
            </div>
        </div>
        <div class=" col-span-3 bg-white px-8 pb-4 rounded-xl">
            <p class="text-xl font-semibold w-auto mt-5 mb-4">Monthly Payments</p>
            <div class="border-b border-gray-300 flex py-1 px-2 justify-between bg-gray-100">
                <div class=" flex justify-between py-2 w-28">Name</div>
                <div class=" flex justify-between py-2 w-28">Amount</div>
                <div class=" flex justify-between py-2 w-28">Date</div>
                <div class=" flex justify-between py-2 w-28">Status</div>
            </div>
            <MonthlyPayments v-for="(info, index) in PaymentsData" :key="info.id" :PaymentsData="info"/>
        </div>
    </div>
</div>
</template>
<style scoped>
</style>