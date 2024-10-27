<script setup>
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import { useRoute, useRouter } from 'vue-router';
import {ref} from 'vue';
const expanded = ref(false)
const router = useRouter()
const onClick = ()=>{
    console.log('message')
    if( props.item.children) {
       expanded.value =! expanded.value 
    } else {
        router.push({path: props.item.path})
    }
}

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class=" flex flex-row justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
        @click="onClick">
        <div class=" flex flex-row gap-1 items-center">
            <component :is="item.icon" size="16" color="#3F51B5"/>
            <p class="text-gray-600">{{ item.title }}</p>
        </div>
        <ChevronUp v-if="expanded && item.children" size="13"/>
        <ChevronDown v-else-if="item.children" size="13"/>  
    </div>
    <div v-if="item.children && expanded" class="ml-4">
        <MenuItem v-for="(root, rootIndex) in item.children" 
        :key="`root-${rootIndex}`" :item="root"/>  
    </div>
</template>
<style scoped>

</style>