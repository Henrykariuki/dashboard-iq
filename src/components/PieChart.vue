<script>

import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['Electronics', 'Fashion', 'Household',],
        datasets: [
          {
            backgroundColor: ['#3F51B5', '#7986CB', '#C5CAE9'],
            data: [300, 50, 100],
            hoverOffset: 4
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      },
    };
  },
};
</script>
<template>
  <div class=" h-96 bg-white rounded-lg">
    <div class="h-10 pl-6 flex items-center">
      <p class="font-semibold text-lg py-5">Sales by category</p>
    </div>
    <Pie class="pb-10" :data="chartData" :options="chartOptions" />
  </div>
</template>
<style scoped>
</style>
