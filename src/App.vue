<script setup>
import IncomeGrid from './components/IncomeGrid.vue';
import LeftPanel from './components/LeftPanel.vue';
import MyHeader from './components/MyHeader.vue'
import SalesGrid from './components/SalesGrid.vue';

</script>

<template>
  <div class="flex">
    <div>
      <LeftPanel></LeftPanel>
    </div>
    <div class="grow">
      <header>
        <MyHeader></MyHeader>
      </header>
      <main>
        <IncomeGrid></IncomeGrid>
        <SalesGrid></SalesGrid>
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
