<script setup>
import { Pencil, Trash2, Check } from 'lucide-vue-next';
import Editor from '@tinymce/tinymce-vue'
import { ref } from 'vue';

const content = ref([
    {label: 'Status', name: 'Draft', icon: Pencil},
    {label: 'Visibility', name: 'Private', icon: Pencil}
])

const buttons = ref([
    {icon: Trash2, name: 'Discard', borderButton: 'border border-red-500', textButton: 'text-red-500', backgroundColor: 'bg-inherit', buttonHover: 'hover:bg-red-50'},
    {icon: Check, name: 'Publish', borderButton: 'border-none', textButton: 'text-white', backgroundColor: 'bg-indigo-500', buttonHover: 'hover:bg-indigo-600'}
])
</script>
<template>
    <div class="px-8">
        <div class=" rounded-md bg-white px-6 py-5">
            <div class=" grid grid-cols-3 gap-8">
                <div class=" col-span-2 flex flex-col gap-8">
                    <div class="text-lg font-bold">Create a new post</div>
                    <div class=" flex flex-col gap-4">
                        <input class="border border-gray-300 w-full pl-48 py-40 rounded-md" type="file" name="file">
                        <input class="border border-gray-300 hover:border-indigo-500 focus:outline-none w-full pl-2 py-2 rounded-md" placeholder="Title" type="text">
                        <input class="border border-gray-300 hover:border-indigo-500 focus:outline-none w-full pl-2 pb-28 pt-2 rounded-md" placeholder="Content">
                    </div>
                    <div>
                        <Editor
                            api-key="kj69rh50evq0gf83xs7vopyta81pneems7rhkat0ym5xf623"
                            :init="{
                                plugins: 'lists link image table code help wordcount'
                            }"
                        />
                    </div>
                </div>
                <div class=" flex flex-col gap-4 mt-14">
                    <div class="border border-gray-300 rounded-md ">
                        <div class="border-b border-gray-300 py-3 font-bold pl-2">Publish</div>
                        <div class=" flex flex-col gap-6 py-4">
                            <div v-for="(info, index) in content" :key="`id-${index}`" class="border flex bg-gray-200 flex py-5 px-2 mx-4 rounded-md">
                                <p class="font-bold">{{ info.label }}:</p>
                                <div class="ml-2 flex flex-row gap-20 ">
                                    <p class="text-gray-500 font-medium">{{ info.name }}</p>
                                    <component :is="info.icon" class="text-indigo-500" size="16"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tags border border-gray-300 rounded-md">
                        <div class="border-b border-gray-300 py-3 font-bold pl-2">Tags</div>
                        <div class="flex flex-row gap-2 p-4 ">
                            <div class="bg-gray-200 p-1 px-3 rounded-full text-gray-500">Software</div>
                            <div class="bg-gray-200 p-1 px-3 rounded-full text-gray-500">Web</div>
                        </div>
                    </div>
                    <div class="tags border border-gray-300 rounded-md">
                        <div class="border-b border-gray-300 py-3 font-bold pl-2">Meta</div>
                        <div class="flex flex-col gap-6 p-4 ">
                            <input class="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500 hover:border-indigo-500" type="text" name="text" placeholder="Title">
                            <input class="border border-gray-300 rounded-md pt-2 pl-2 pb-28 focus:outline-none focus:border-indigo-500 hover:border-indigo-500" type="text" name="text" placeholder="Description">
                        </div>
                    </div>
                    <div  class="flex flex-row gap-2">
                        <button v-for="(info, index) in  buttons" :key="`id-${index}`" 
                        class="border border-black flex flex-row gap-4 items-center py-2 px-5 rounded-md"
                        :class="`${info.borderButton} ${info.backgroundColor} ${info.textButton} ${info.buttonHover}`">
                            <component :is="info.icon" size="16"/>
                            {{ info.name }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>