<script setup>
import IncomeGrid from './components/IncomeGrid.vue';
import LeftPanel from './components/LeftPanel.vue';
import MyHeader from './components/MyHeader.vue'
import SalesGrid from './components/SalesGrid.vue';
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router';

const isMenuOpen = ref(true)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}


provide('isMenuOpen', isMenuOpen);
provide('toggleMenu', toggleMenu);

</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <div class=" h-full">
      <LeftPanel></LeftPanel>
    </div>
    <div class="grow overflow-auto bg-indigo-50">
      <header>
        <MyHeader></MyHeader>
      </header>
      <main class="h-full ">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
