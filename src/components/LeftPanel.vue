<script setup>
import { 
    Home,
    Image,
    MessageCircle,
    Calendar,
    MessagesSquare,
    Folder,
    Mail,
    SquareCheckBig, 
    NotebookText, Bookmark, CircleAlert, Box, Grid2X2, List, Share2, PanelBottomDashed, Layers2, Images,
    Menu, File, BarChart3, Circle
} from 'lucide-vue-next';

const  FirstSection = [
    {number: 1, name: 'Home', icon: Home},
    {number: 2, name: 'Image', icon: Image}
]

const  SecondSection = [
    {number: 1, name: 'Blog', icon: MessageCircle},
    {number: 2, name: 'calender', icon: Calendar},
    {number: 3, name: 'Chat', icon: MessagesSquare},
    {number: 4, name: 'File', icon: Folder},
    {number: 5, name: 'Mail', icon: Mail},
    {number: 6, name: 'Task List', icon: SquareCheckBig}
]

const  ThirdSection = [
    {number: 1, name: 'Form Layout', icon: NotebookText},
    {number: 2, name: 'Input', icon: SquareCheckBig},
    {number: 3, name: 'Float Label', icon: Bookmark},
    {number: 4, name: 'Invalid State', icon: CircleAlert},
    {number: 5, name: 'Button', icon: Box},
    {number: 6, name: 'Table', icon: Grid2X2},
    {number: 7, name: 'List', icon: List},
    {number: 8, name: 'Tree', icon: Share2},
    {number: 9, name: 'Panel', icon: PanelBottomDashed},
    {number: 10, name: 'Overlay', icon: Layers2},
    {number: 11, name: 'Media', icon: Images},
    {number: 12, name: 'Menu', icon: Menu},
    {number: 13, name: 'message', icon: MessageCircle},
    {number: 14, name: 'File', icon: File},
    {number: 15, name: 'Chart', icon: BarChart3},
    {number: 16, name: 'Misc', icon: Circle}
]

</script>
<template>
    <div class=" border border-black h-screen w-64">
        <div class="h-20 border border-black w-full flex items-center justify-center font-medium text-indigo-500">
            DASHBOARD-IQ
        </div>
        <div class="">
            <div class="h-auto w-full border border-black pb-3">
                <p class="text-indigo-500 font-semibold pb-6">DASHBOARDS</p>
                <div v-for="(button, index) in FirstSection" :key="button.number" class="flex border border-black h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/><p class="ml-3 text-gray-600">{{ button.name }}</p>
                </div>  
            </div>
            <div class="h-auto w-full border border-black pb-3">
                <p class="text-indigo-500 font-semibold pb-6">APPS</p>
                <div v-for="(button, index) in SecondSection" :key="button.number" class="flex border border-black h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/><p class="ml-3 text-gray-600">{{ button.name }}</p>
                </div>
                
            </div>
            <div class="h-auto w-full border border-black pb-3">
                <p class="text-indigo-500 font-semibold pb-6">UI KIT</p>
                <div v-for="(button, index) in ThirdSection" :key="button.number" class="flex border border-black h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/>
                    <p class="ml-3 text-gray-600">{{ button.name }}</p>
                </div>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>
