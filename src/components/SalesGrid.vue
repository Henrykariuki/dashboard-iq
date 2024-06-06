<script setup>
import { Upload, ArrowUpNarrowWide, ArrowUpDown, Search, Star, StarHalf } from 'lucide-vue-next';
const tags = [

        {number: 1, name: 'Category'},
        {number: 2, name: 'Price'},
        {number: 3, name: 'Status'}
]

const productNames = [
    {number: 1, name: 'Bamboo watch', category: 'Accesories', price: 65.00, status: 'INSTOCK', icon: Search, backgroundColor: 'bg-green-500'},
    {number: 2, name: 'Black Watch', category: 'Accesories', price: 72.00, status: 'OUTOFSTOCK', icon: Search, backgroundColor: 'bg-red-500'},
    {number: 3, name: 'Blue Band', category: 'Fitness', price: 79.00, status: 'LOWSTOCK', icon: Search, backgroundColor: 'bg-orange-500'},
    {number: 4, name: 'Blue T-Shirt', category: 'Clothing', price: 29.00, status: 'INSTOCK', icon: Search, backgroundColor: 'bg-green-500'},
    {number: 5, name: 'Bracelet', category: 'Accesories', price: 15.00, status: 'INSTOCK', icon: Search, backgroundColor: 'bg-green-500'}
]

const topProducts = [
    {number:1, image: '/images/image01.jpg', name: 'Bamboo Watch', icon: Star, price: 65},
    {number:1, image: '/images/image02.jpg', name: 'Black Watch', icon: Star, price: 72},
    {number:1, image: '/images/image03.jpg', name: 'Blue Band', icon: Star, price: 79},
    {number:1, image: '/images/image04.jpg', name: 'Blue T-Shirt', icon: Star, price: 29},
    {number:1, image: '/images/image05.jpg', name: 'Bracelet', icon: Star, price: 15},
    {number:1, image: '/images/image06.jpg', name: 'Brown Purse', icon: Star, price: 120}
]
</script>
<template>
    <div class="grid grid-cols-5 gap-8 h-auto  mt-8 px-8">
        <div class=" h-5/6 col-span-3 bg-white pb-28 mb-20 rounded-lg">
            <div class="sales-box">
                <div class=" flex justify-between py-2">
                    <div class="font-semibold text-lg flex items-center ml-4">Recent Sales</div>
                    <div class="flex p-3 mr-4">
                        <input class="w-56 rounded-full pl-6 border border-gray-400 hover:border-indigo-500 duration-75" type="text" placeholder="Search">
                        <div class="ml-6 p-3 bg-indigo-500 rounded-full"><Upload class="text-white" size="16" /></div>
                    </div>
                </div>
                <div class=" w-auto h-auto flex flex-col justify-center items-center">
                    <div class=" w-5/6 h-auto  max-w-2xl">
                        <div class="buttons-container border-b border-gray-200 w-full flex px-1 ">
                            <div class="w-44 h-12 flex items-center hover:bg-gray-100 active:bg-indigo-100"><p class="font-bold">Name</p><ArrowUpNarrowWide size="20" class="ml-2" /></div>
                            <div v-for="(button, index) in tags" :key="button.number" class=" hover:bg-gray-100 pl-3 w-36 h-12 flex items-center active:bg-indigo-100">
                                <p class="font-bold">{{ button.name }}</p><ArrowUpDown size="20" class="ml-2" />
                            </div>
                        </div>
                        <div v-for="(product, index) in productNames" :key="product.number" class="px-2 product-box flex border-b border-gray-200 h-20 items-center justify-between">
                            <div class=" flex items-center w-32">{{ product.name }}</div>
                            <div class=" flex items-center w-28 mx-4">{{ product.category }}</div>
                            <div class=" flex items-center w-10 mx-4">${{ product.price }}</div>
                            <div class="flex justify-start w-32">
                                <div class=" flex items-center text-xs px-1 py-1 text-white font-semibold rounded-lg " :class="product.backgroundColor">{{ product.status }}</div>
                            </div>
                            <button class="border border-indigo-500 p-3 flex items-center rounded-full focus:ring-2 ring-indigo-300"><component :is="product.icon" size="16" class="text-indigo-500 cursor-pointer"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" h-5/6 col-span-2 bg-white rounded-lg">
            <div class="font-semibold text-lg flex items-center  p-6">Top Products</div>
            <div class=" w-full h-auto ">
                <div v-for="(product, index) in topProducts" :key="product.name" class="pl-8 product-container flex mb-5">
                    <div class="  photo-container w-20 h-14 "><img class="w-full h-14 object-cover" :src="product.image"></div>
                    <div class=" flex w-60  flex justify-around ">
                        <div class="name  w-auto text-nowrap  ">
                            <p class="text-gray-600 font-medium">{{ product.name }}</p>
                            <div class="flex">
                                <component :is="product.icon" size="20" /><component :is="product.icon" size="20" /><component :is="product.icon" size="20" /><component :is="product.icon" size="20" /><component :is="product.icon" size="20" />
                            </div>
                        </div>
                        <div class="price   flex items-center w-10 "><p class="text-gray-600 font-bold text-lg">${{ product.price }}</p></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
</style>