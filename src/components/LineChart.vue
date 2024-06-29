<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const myLineChart = ref(null);

onMounted(() => {
  const ctx = myLineChart.value.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Income',
        data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
        fill: false,
        borderColor: 'rgb(0, 255, 0)',
        tension: 0.3
      },
      {
        label: 'Expenses',
        data: [1000, 5100, 6200, 3300, 2100, 6200,4500],
        fill: true,
        borderColor: 'rgb(99 102 241)',
        tension: 0.3,
        backgroundColor: 'rgba(63, 81, 181, 0.2)'
      }
    ],
    },
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          }
        }
      }
    }
  });
});
</script>

<template>
  <div>
<canvas ref="myLineChart"></canvas>
  </div>
</template>

<style scoped>
</style>