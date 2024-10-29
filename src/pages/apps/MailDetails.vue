<script setup>
import MailButtons from '@/components/MailButtons.vue';
import Editor from '@tinymce/tinymce-vue'
import { ChevronLeft, CornerUpRight, EllipsisVertical, Images, Paperclip, Send } from 'lucide-vue-next';
import { ref } from 'vue';
const detailsButtons = ref([
    {
    icon: Images, name: null, 
    buttonBackgroundColor: 'bg-white', 
    buttonHover: 'hover:bg-indigo-50', 
    textColor: 'text-indigo-500',
    buttonBorder: 'border border-indigo-500',
    buttonPadding: 'px-3'
    },
    {
    icon: Paperclip, name: null, 
    buttonBackgroundColor: 'bg-white', 
    buttonHover: 'hover:bg-indigo-50', 
    textColor: 'text-indigo-500',
    buttonBorder: 'border border-indigo-500',
    buttonPadding: 'px-3'
    },
    {
    icon: Send, name: 'Send', 
    buttonBackgroundColor: 'bg-indigo-500', 
    buttonHover: 'hover:bg-indigo-600', 
    textColor: 'text-white',
    buttonBorder: 'border-none',
    buttonPadding: 'px-4'
    },
])

</script>
<template>
    <div class=" p-4 md:p-8">
        <div class="bg-white p-8 rounded-lg">
            <div class="grid md:grid-cols-6 gap-8">
                <div>
                    <MailButtons />
                </div>
                <div class=" md:col-span-5  md:p-8">
                    <div class="flex flex-col md:flex-row md:justify-between mb-4">
                        <div class="flex items-center flex-row gap-1 md:gap-4">
                            <button class=" text-gray-500 md:p-3 rounded-md hover:bg-gray-50">
                                <ChevronLeft />
                            </button>
                            <div><img class="w-10 h-10  rounded-full object-cover" src="/images/james.jpg"></div>
                            <div>
                                <p class="font-bold">James Carter</p>
                                <p class="text-gray-700 font-medium text-nowrap">To: ionibowcher@gmail.com</p>
                            </div>
                        </div>
                        <div class="flex flex-row justify-between  items-center ">
                            <p class="font-medium text-nowrap">Jun 16 2024</p>
                            <div >
                                <button class=" text-gray-500 p-3 rounded-md hover:bg-gray-50">
                                    <CornerUpRight size="16" />
                                </button>
                                <button class=" text-gray-500 p-3 rounded-md hover:bg-gray-50">
                                    <EllipsisVertical size="16" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border border-gray-300 rounded-md flex flex-col gap-4 p-4">
                        <div>
                            <p class="font-semibold mb-4">Apply These 7 Secret Techniques To Improve Event Apply These
                            </p>
                            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                        </div>
                        <div>
                            <Editor api-key="kj69rh50evq0gf83xs7vopyta81pneems7rhkat0ym5xf623" :init="{
                                    plugins: 'lists link image table code help wordcount'
                                }" />
                        </div>
                        <div class="flex flex-row gap-4 justify-end ">
                            <div v-for="(info, index) in detailsButtons" :key="`id-${index}`">
                                <button
                                    :class="`${info.buttonBackgroundColor} ${info.buttonHover} ${info.textColor} ${info.buttonBorder} ${info.buttonPadding}`"
                                    class=" flex flex-row gap-2 items-center h-10 rounded-md">
                                    <component :is="info.icon" size="16" />
                                    {{ info.name }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>