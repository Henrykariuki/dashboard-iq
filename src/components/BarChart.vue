<script >
import Chart from 'chart.js/auto'

(async function() {
  
  new Chart(
    document.getElementById('dashboard-iq'),
    {
      type: 'bar',
      data: {
        labels: [
          'MON',
          'TEU',
          'WED',
          'THU',
          'FRI',
          'SAT',
          'SUN'
        ],
        datasets: [
          {
            label: 'Revenue',
            data: [65, 59, 80, 81, 55, 54, 40],
            barThickness: 14,
            borderRadius: 10,
            backgroundColor: '#5C6BC0'
          },
          {
            label: 'Profit',
            data: [28, 48, 40, 19, 86, 27, 90],
            barThickness: 14,
            borderRadius: 10,
            backgroundColor: '#9FA8DA'
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    }
  );
})();

</script>
<template>
    <div class="col-span-3 h-96 px-8 bg-white rounded-lg">
      <p class="font-semibold text-lg py-5">Revenue Overview</p>
      <canvas class="h-24 pb-10" id="dashboard-iq"></canvas>
    </div>
</template>
<style scoped>
</style>
