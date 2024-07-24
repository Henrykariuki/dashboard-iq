<script setup>
import StorageCard from '@/components/StorageCard.vue';
import { ref } from 'vue'; 
const storage = ref([
  {name: 'Cloud Storage', level: 'bg-yellow-100', levelTwo: 'bg-yellow-500', fileNumbers: '412 Files', freeSpace: '1.5GB'},
  {name: 'Dropbox Storage', level: 'bg-pink-100', levelTwo: 'bg-pink-500', fileNumbers: '286 Files', freeSpace: '2.5GB'},
  {name: 'Google Drive Storage', level: 'bg-green-100', levelTwo: 'bg-green-500', fileNumbers: '286 Files', freeSpace: '2.5GB'},
  {name: 'Internal Storage', level: 'bg-indigo-100', levelTwo: 'bg-indigo-500', fileNumbers: '20 Files', freeSpace: '8.2GB'}
])

</script>
<template>
  <div class="px-8">
    <div class=" border border-black grid grid-cols-4 gap-2">
      <StorageCard v-for="(info, index) in storage" :key="`id-${index}`" :details="info" />
      <div class="h-40 bg-white"></div>
      <div class="bg-white col-span-3"></div>
    </div>
  </div>
</template>