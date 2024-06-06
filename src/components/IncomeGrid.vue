<script setup>
import BarChart from './BarChart.vue';
import PieChart from './PieChart.vue';

import { ref } from 'vue';
import StatCard from './StatCard.vue';

const stats = ref([
    {
        title: 'Sales', value: 120, changePercentage: 12, positivechange: true, 
    },
    {
        title: 'Revenue', value: 4500, changePercentage: 20, positivechange: true, 
    },
    {
        title: 'Visitors', value: 360, changePercentage: 24, positivechange: false, 
    },
    {
        title: 'Stock', value: 164, changePercentage: 30, positivechange: true, 
    }
])
</script>
<template>
    <div class="revenue-grid mt-6 w-full px-8">
        <div class="grid grid-cols-4 gap-8">
            <StatCard v-for="(stat, index) in stats" :key="index" :stats="stat"/>
            
            
           
            <BarChart></BarChart>
            <PieChart></PieChart>
        </div>

    </div>
</template>
<style scoped>
</style>
