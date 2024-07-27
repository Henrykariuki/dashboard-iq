<script setup>
import StorageCard from '@/components/StorageCard.vue';
import DoughnutChart from '@/components/DoughnutChart.vue';
import FolderCard from '@/components/FolderCard.vue';
import { Search, Upload, Images, Folder, FolderOpen } from 'lucide-vue-next';
import { ref } from 'vue'; 
const storage = ref([
  {name: 'Cloud Storage', level: 'bg-yellow-100', levelTwo: 'bg-yellow-500', fileNumbers: '412 Files', freeSpace: '1.5GB'},
  {name: 'Dropbox Storage', level: 'bg-pink-100', levelTwo: 'bg-pink-500', fileNumbers: '286 Files', freeSpace: '2.5GB'},
  {name: 'Google Drive Storage', level: 'bg-green-100', levelTwo: 'bg-green-500', fileNumbers: '286 Files', freeSpace: '2.5GB'},
  {name: 'Internal Storage', level: 'bg-indigo-100', levelTwo: 'bg-indigo-500', fileNumbers: '20 Files', freeSpace: '8.2GB'}
])


const buttons = ref([
  {icon: Search, name: 'Details', buttonBackground: 'bg-white', buttonHover: 'hover:bg-indigo-50', textColor: 'text-indigo-500', buttonBorder: 'border border-indigo-500'},
  {icon: Upload, name: 'Upgrade', buttonBackground: 'bg-indigo-500', buttonHover: 'hover:bg-indigo-600', textColor: 'text-white', buttonBorder: 'none'}
])


const folders = ref([
  {icon: Folder, name: 'Nairobi 2022', number: 20},
  {icon: Folder, name: 'Protoype', number: 10},
  {icon: Folder, name: 'Other Files', number: 6},
  {icon: Folder, name: 'Antalya Holiday', number: 20},
  {icon: Images, name: 'Vocals', number: 12},
  {icon: Folder, name: 'Studio Photograpy', number: 3},
  {icon: FolderOpen, name: 'Server Backup', number: 9},
  {icon: Folder, name: 'Document Files', number: 4},
  {icon: FolderOpen, name: 'Voices', number: 7},
])
</script>
<template>
  <div class="px-8">
    <div class=" border border-black grid grid-cols-4 grid-flow-row gap-2 pb-40">
      <StorageCard v-for="(info, index) in storage" :key="`id-${index}`" :details="info" />
      <div class=" flex flex-col gap-6 items-center py-6 bg-white">
        <DoughnutChart/>
        <div class="flex flex-row gap-4" >
          <div v-for="(info, index) in buttons" :key="`id-${index}`">
            <button 
            class="flex flex-row items-center rounded-md gap-2 p-2"
            :class="`${info.buttonBackground} ${info.buttonHover} ${info.textColor} ${info.buttonBorder}`">
              <component :is="info.icon" size="16"/> <p>{{ info.name }}</p>
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white col-span-3 py-8 px-6">
        <p class="font-semibold text-xl mb-4">Folders</p>
        <div class="grid grid-cols-3 gap-6">
          <FolderCard v-for="(info, index) in folders" :key="`id-${index}`" :properties="info"/>
        </div>
      </div>
      <div class="border border-black h-40">
        <div class="border border-black">
          <div>Categories</div>
          <div></div>
        </div>
        <div class=""></div>
      </div>
      <div class="border border-black col-span-3 "></div>

    </div>
  </div>
</template>