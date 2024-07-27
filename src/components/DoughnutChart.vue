<template>
  <div>
    <canvas class="chart-canvas" ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, Title } from 'chart.js'

// Register the necessary components for Chart.js
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title)

const chartCanvas = ref(null)

const chartData = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [100, 300],
      backgroundColor: [
        'rgba(197, 202, 233)',
        'rgba(63, 81, 181)',
      ],
    },
  ],
}

const chartOptions = {
  responsive: true,
  cutout: '88%',
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Account Storage',
    },
  },
}

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions,
  })
})
</script>
<style scoped>
.chart-canvas {
  width: 250px;
  height: 250px;
}
</style>

