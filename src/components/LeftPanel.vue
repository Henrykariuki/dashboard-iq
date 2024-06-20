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
    Menu, File, BarChart3, Circle, Eye, Globe, Bot, Palette, Monitor, Pencil, User, DollarSign, CircleHelp,
    ShieldQuestion, Phone, Plus, ShoppingCart, History, AlignLeft, ChevronDown
} from 'lucide-vue-next';

import { inject } from 'vue';

const isMenuOpen = inject('isMenuOpen');



const  FirstSection = [
    {number: 1, name: 'Home', icon: Home, path: '/'},
    {number: 2, name: 'Banking', icon: Image, path: '/banking'}
]

const  SecondSection = [
    {number: 1, name: 'Blog', icon: MessageCircle, hasButton: true, path: '/apps-blog'},
    {number: 2, name: 'calender', icon: Calendar, hasButton: false, path: '/apps-calender'},
    {number: 3, name: 'Chat', icon: MessagesSquare, hasButton: false, path: '/apps-chat'},
    {number: 4, name: 'File', icon: Folder, hasButton: false, path: '/apps-file'},
    {number: 5, name: 'Mail', icon: Mail, hasButton: true, path: '/apps-mail'},
    {number: 6, name: 'Task List', icon: SquareCheckBig, hasButton: false, path: '/apps-tasklist'}
]





const  ThirdSection = [
    {number: 1, name: 'Form Layout', icon: NotebookText, path: '/ui-form'},
    {number: 2, name: 'Input', icon: SquareCheckBig, path: '/ui-input'},
    {number: 3, name: 'Float Label', icon: Bookmark, path: '/ui-label'},
    {number: 4, name: 'Invalid State', icon: CircleAlert, path: '/ui-invalid'},
    {number: 5, name: 'Button', icon: Box, path: '/ui-button'},
    {number: 6, name: 'Table', icon: Grid2X2, path: '/ui-table'},
    {number: 7, name: 'List', icon: List, path: '/ui-list'},
    {number: 8, name: 'Tree', icon: Share2, path: '/ui-tree'},
    {number: 9, name: 'Panel', icon: PanelBottomDashed, path: '/ui-panel'},
    {number: 10, name: 'Overlay', icon: Layers2, path: '/ui-overlay'},
    {number: 11, name: 'Media', icon: Images, path: '/ui-media'},
    {number: 12, name: 'Menu', icon: Menu, path: '/ui-menu'},
    {number: 13, name: 'message', icon: MessageCircle, path: '/ui-message'},
    {number: 14, name: 'File', icon: File, path: '/ui-file'},
    {number: 15, name: 'Chart', icon: BarChart3, path: '/ui-chart'},
    {number: 16, name: 'Misc', icon: Circle, path: '/ui-misc'}
]

const  FourthSection = [
    {number: 1, name: 'Free Blocks', icon: Eye},
    {number: 2, name: 'All Blocks', icon: Globe},
   
]

const  FifthSection = [
    {number: 1, name: 'PrimeIcons', icon: Bot},
    {number: 2, name: 'Colors', icon: Palette},
    {number: 1, name: 'PrimeFlex', icon: Monitor},
    {number: 2, name: 'Figma', icon: Pencil}
]

const  SixthSection = [
    {number: 1, name: 'Landing', icon: Globe, hasButton: false},
    {number: 2, name: 'Auth', icon: User, hasButton: true},
    {number: 3, name: 'Crud', icon: Pencil, hasButton: false},
    {number: 4, name: 'Timeline', icon: Calendar, hasButton: false},
    {number: 5, name: 'Invoice', icon: DollarSign, hasButton: false},
    {number: 6, name: 'About Us', icon: User, hasButton: false},
    {number: 7, name: 'Help', icon: CircleHelp, hasButton: false},
    {number: 8, name: 'Not Found', icon: CircleAlert, hasButton: false},
    {number: 9, name: 'Empty', icon: Circle, hasButton: false},
    {number: 10, name: 'FAQ', icon: ShieldQuestion, hasButton: false},
    {number: 11, name: 'Contact Us', icon: Phone, hasButton: false},
]

 const  SeventhSection = [
    {number: 1, name: 'Product Overview', icon: Image},
    {number: 2, name: 'Product List', icon: List},
    {number: 3, name: 'New Product', icon: Plus},
    {number: 4, name: 'Shopping Cart', icon: ShoppingCart},
    {number: 5, name: 'Checkout Form', icon: SquareCheckBig},
    {number: 6, name: 'Order History', icon: History},
    {number: 7, name: 'Order Summary', icon: File},
]

const  EighthSection = [
    {number: 1, name: 'Home', icon: List},
    {number: 2, name: 'Image', icon: Plus}
]

const  NinthSection = [
    {number: 1, name: 'Submenu 1', icon: AlignLeft, hasButton:true},
    {number: 2, name: 'Submenu 2', icon: AlignLeft, hasButton:true}
]

const  TenthSection = [
    {number: 1, name: 'Buy Now', icon: ShoppingCart},
    {number: 2, name: 'Documentation', icon: CircleAlert}
]
</script>
<template>
    <div v-if="isMenuOpen" class=" duration-500 h-full  w-64">
        <div class="h-20  text-xl w-full flex items-center justify-center font-medium text-indigo-500">
            DASHBOARD-IQ
        </div>
        <div class="overflow-y-auto h-full ">
            <div class="h-auto w-full  pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">DASHBOARDS</p>
                
                 <RouterLink v-for="(button, index) in FirstSection" :key="button.number" :to="button.path">
                    <div  class="pl-6 cursor-pointer hover:bg-gray-100 duration-75 flex h-11 items-center mb-2 ">
                        <component :is="button.icon" size="16" color="#3F51B5"/>
                        <p class="ml-3 text-gray-600">{{ button.name }}</p>
                    </div>
                </RouterLink>     
            </div>
            <div class="h-auto w-full pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">APPS</p>
                <RouterLink v-for="(tag, index) in SecondSection" :key="tag.number" :to="tag.path" class="pl-6 cursor-pointer flex hover:bg-gray-100 duration-75  h-11 items-center mb-2 ">
                    <component :is="tag.icon" size="16" color="#3F51B5"/>
                    <div class="ml-3 flex justify-between items-center h-8 w-full">
                        <p class="text-gray-600">{{ tag.name }}</p>
                        <ChevronDown size="13px" v-if="tag.hasButton" class="mr-8"/>
                    </div>
                </RouterLink>
                
            </div>
            <div class="h-auto w-full  pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">UI KIT</p>
                <RouterLink v-for="(button, index) in ThirdSection" :key="button.number" :to="button.path" class="pl-6 cursor-pointer flex hover:bg-gray-100 duration-75 h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/>
                    <p class="ml-3 text-gray-600">{{ button.name }}</p>
                </RouterLink>
            </div>
            <div class="h-auto w-full  pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">PRIME BLOCKS</p>
                <div v-for="(button, index) in FourthSection" :key="button.number" class="pl-6 cursor-pointer flex hover:bg-gray-100 duration-75 h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/>
                    <p class="ml-3 text-gray-600">{{ button.name }}</p>
                </div>
            </div>
             <div class="h-auto w-full  pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">UTILITIES</p>
                <div v-for="(button, index) in FifthSection" :key="button.number" class="pl-6 cursor-pointer flex hover:bg-gray-100 duration-75 h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/>
                    <p class="ml-3 text-gray-600">{{ button.name }}</p>
                </div>
            </div>
            <div class="h-auto w-full  pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">PAGES</p>
                <div v-for="(MenuButton, index) in SixthSection" :key="MenuButton.number" class="pl-6 cursor-pointer hover:bg-gray-100 duration-75 h-11 flex items-center mb-2 ">
                    <component :is="MenuButton.icon" size="16" color="#3F51B5"/>
                    <div class="ml-3 flex justify-between items-center h-8 w-full">
                        <p class="ml-3 text-gray-600">{{ MenuButton.name }}</p>
                        <ChevronDown size="13px" v-if="MenuButton.hasButton" class="mr-8"/>
                    </div>
                </div>
            </div>
            <div class="h-auto w-full pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">E-COMMERCE</p>
                <div v-for="(button, index) in SeventhSection" :key="button.number" class="pl-6 cursor-pointer flex hover:bg-gray-100 duration-75 h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/>
                    <p class="ml-3 text-gray-600">{{ button.name }}</p>
                </div>
            </div>
            <div class="h-auto w-full pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">USER MANAGEMENT</p>
                <div v-for="(button, index) in EighthSection" :key="button.number" class="pl-6 cursor-pointer flex hover:bg-gray-100 duration-75 h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/>
                    <p class="ml-3 text-gray-600">{{ button.name }}</p>
                </div>
            </div>
            <div class="h-auto w-full pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">HIERARCHY</p>
                <div v-for="(ExpandButton, index) in NinthSection" :key="ExpandButton.number" class="pl-6 cursor-pointer flex hover:bg-gray-100 duration-75 h-11 items-center mb-2 ">
                    <component :is="ExpandButton.icon" size="16" color="#3F51B5"/>
                    <div class="ml-3 flex justify-between items-center h-8 w-full">
                        <p class="ml-3 text-gray-600">{{ ExpandButton.name }}</p>
                        <ChevronDown size="13px" v-if="ExpandButton.hasButton" class="mr-8"/>
                    </div>
                </div>
            </div>
            <div class="h-auto w-full  pb-3">
                <p class="text-indigo-500 font-semibold pb-6 pl-6 text-sm">START</p>
                <div v-for="(button, index) in TenthSection" :key="button.number" class="pl-6 cursor-pointer flex hover:bg-gray-100 duration-75 h-11 items-center mb-2 ">
                    <component :is="button.icon" size="16" color="#3F51B5"/>
                    <p class="ml-3 text-gray-600">{{ button.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>
