<script setup>
import { ChevronDown } from 'lucide-vue-next';
import {routes} from '../main.js'
import MenuItem from './MenuItem.vue'
import {ref} from 'vue'
import { inject } from 'vue';


const menuLinks = ref(routes);

const isMenuOpen = inject('isMenuOpen');

</script>
<template>
<div v-if="isMenuOpen" class="w-64 ">
    <div class="  text-xl font-medium text-indigo-500">
            DASHBOARD-IQ
    </div>
    <div class="h-screen overflow-y-auto pb-12">
        <div  v-for= "(menu, index) in menuLinks" :key="index">
            <div v-if= "menu.children">
                <p class=" text-indigo-500 font-semibold px-4 py-2 text-sm">{{menu.title}}</p>
                <div v-for="(child, childIndex) in menu.children" 
                    :key="`${index}-${childIndex}`">
                    <MenuItem :item="child"/>
                </div>
            </div>
            <MenuItem v-else :item="menu"/>
        
        </div>
    </div>
</div>
</template>
<style scoped>
</style>