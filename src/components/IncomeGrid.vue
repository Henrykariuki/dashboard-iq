<script setup>
import BarChart from './BarChart.vue';
import PieChart from './PieChart.vue';
import { Plus, ArrowUp, ArrowDown } from 'lucide-vue-next';
</script>
<template>
    <div class="revenue-grid mt-6 w-full px-8">
        <div class="grid grid-cols-4 gap-8">
            <div class="rounded-lg bg-white h-40">
                <div class=" ml-8 mt-4 flex flex-col justify-start">
                    <p class="font-bold text-lg text-gray-600 mb-3">Sales</p>
                    <p class="font-bold text-3xl mb-2">120</p>
                    <div class="flex items-center text-green-600">
                        <Plus size="13" />
                        <p class="mr-1">12%</p>
                        <ArrowUp size="13"/>
                    </div>
                </div>
            </div>
            <div class="rounded-lg bg-white h-40">
                 <div class=" ml-8 mt-4 flex flex-col justify-start">
                    <p class="font-bold text-lg text-gray-600 mb-3">Revenue</p>
                    <p class="font-bold text-3xl mb-2">$4500</p>
                    <div class="flex items-center text-green-600">
                        <Plus size="13" />
                        <p class="mr-1">20%</p>
                        <ArrowUp size="13"/>
                    </div>
                </div>
            </div>
            <div class="rounded-lg bg-white h-40">
                 <div class=" ml-8 mt-4 flex flex-col justify-start">
                    <p class="font-bold text-lg text-gray-600 mb-3">Visitors</p>
                    <p class="font-bold text-3xl mb-2">360</p>
                    <div class="flex items-center text-red-600">
                        <Plus size="13" />
                        <p class="mr-1">24%</p>
                        <ArrowDown size="13"/>
                    </div>
                </div>
            </div>
            <div class="rounded-lg bg-white h-40">
                 <div class=" ml-8 mt-4 flex flex-col justify-start">
                    <p class="font-bold text-lg text-gray-600 mb-3">Stock</p>
                    <p class="font-bold text-3xl mb-2">164</p>
                    <div class="flex items-center text-green-600">
                        <Plus size="13" />
                        <p class="mr-1">30%</p>
                        <ArrowUp size="13"/>
                    </div>
                </div>
            </div>
            <BarChart></BarChart>
            <PieChart></PieChart>
        </div>

    </div>
</template>
<style scoped>
</style>
