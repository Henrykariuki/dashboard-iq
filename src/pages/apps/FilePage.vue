<script setup>
import StorageCard from '@/components/StorageCard.vue';
import DoughnutChart from '@/components/DoughnutChart.vue';
import FolderCard from '@/components/FolderCard.vue';
import { Search, Upload, Images, Folder, FolderOpen, File, Video, ArrowDownUp, ArrowUpNarrowWide, X } from 'lucide-vue-next';
import { ref } from 'vue'; 
import { info } from 'autoprefixer';
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

const categories = ref([
  {icon: Images, name: 'Images',  number: 25, background: 'bg-purple-50'},
  {icon: File, name: 'Documents',  number: 325, background: 'bg-pink-50'},
  {icon: Video, name: 'videos',  number: 90, background: 'bg-green-50'}
])


const propertyNames = ref([
  {name: 'Name', icon: ArrowDownUp, propertyBackground: 'bg-gray-100', propertyHover: 'hover:bg-gray-200' },
  {name: 'Date', icon: null, propertyBackground: 'bg-gray-100', propertyHover: '' },
  {name: 'File Size', icon: ArrowDownUp, propertyBackground: 'bg-gray-100', propertyHover: 'hover:bg-gray-200' },
  {name: '', icon: null, propertyBackground: 'bg-gray-100', propertyHover: '' }
])

const fileInfo = ref([
  {icon: File, name: 'cv.pdf', date: '16 Jun 2024', fileSize: '2.4 MB',},
  {icon: File, name: 'cv-new.pdf', date: '16 Jun 2024', fileSize: '2.4 MB',},
  {icon: File, name: 'ads.pdf', date: '16 Jun 2024', fileSize: '6.4 MB',},
  {icon: Images, name: 'product.png', date: '16 Jun 2024', fileSize: '21.4 MB',},
  {icon: Images, name: 'report.pdf', date: '16 Jun 2024', fileSize: '2.4 MB',},
  {icon: Images, name: 'art.png', date: '16 Jun 2024', fileSize: '25.4 MB',},
  {icon: File, name: 'payment-1.pd', date: '16 Jun 2024', fileSize: '10 MB',},
  {icon: Images, name: 'nature.jpeg', date: '16 Jun 2024', fileSize: '18 MB',},
])
</script>
<template>
  <div class="px-4 md:px-8">
    <div class="grid grid-cols-4  gap-8 pb-40">
      <StorageCard v-for="(info, index) in storage" :key="`id-${index}`" :details="info" />
      <div class=" flex flex-col rounded-lg  gap-6 items-center py-6 bg-white">
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
      <div class="bg-white rounded-lg col-span-3 py-8 px-6">
        <p class="font-semibold text-xl mb-4">Folders</p>
        <div class="grid grid-cols-3 gap-6">
          <FolderCard v-for="(info, index) in folders" :key="`id-${index}`" :properties="info"/>
        </div>
      </div>
      <div class=" flex flex-col gap-8">
        <div class=" rounded-lg bg-white p-6 flex flex-col gap-4">
          <div class="font-semibold text-xl">Categories</div>
          <div v-for="(info, index) in categories" :key="`id-${index}`" 
          class="flex justify-between p-2 rounded-md"
          :class="`${info.background}`">
            <div><component :is="info.icon"/></div>
            <div class="font-medium">{{ info.name }}</div>
            <div class="font-bold text-lg">{{ info.number }}</div>
          </div>
        </div>
        <div class=" bg-white rounded-lg">
          <input class="py-24 px-1" type="file" name="file">
        </div>
      </div>
      <div class="bg-white rounded-lg col-span-3 px-8 pt-6 pb-14">
        <div class="font-semibold text-xl mb-4">Recent Uploads</div>
        <div  class="grid grid-cols-4">
          <div v-for="(info, index) in propertyNames" :key="`id-${index}`">
            <div :class="`${info.propertyHover} ${info.propertyBackground}`" class="border-b border-gray-300 flex flex-row gap-2 items-center px-4 h-12">
              <p class="font-bold text-gray-800">{{ info.name }}</p>
              <component :is="info.icon" size="18"/>
            </div> 
          </div>
        </div>
        <div v-for="(info, index) in fileInfo" :key="`id-${index}`" class="border-b border-gray-300 grid grid-cols-4">
          <div class=" py-6 flex flex-row gap-2 items-center px-4">
            <div class="text-indigo-500"><component :is="info.icon" size="16"/></div>
            <p class="text-gray-800">{{ info.name }}</p>
          </div>
          <div class="  px-4 flex items-center text-gray-800">{{ info.date }}</div>
          <div class="  px-8 flex items-center text-gray-800">{{ info.fileSize }}</div>
          <div class="  flex flex-row gap-6 justify-center items-center">
            <button class=" p-2 rounded-full text-red-500 hover:bg-red-50"><X size="16"/></button>
            <button class=" p-2 rounded-full text-indigo-500 hover:bg-indigo-50"><Search size="16"/></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>