<script setup>
import MailButtons from '@/components/MailButtons.vue';
import Editor from '@tinymce/tinymce-vue'
import { ChevronLeft, UserRound, Pencil, Send } from 'lucide-vue-next';
</script>
<template>
    <div class="p-8 ">
        <div class="bg-white p-8 rounded-lg">
            <div class="grid grid-cols-6 gap-8">
                <div>
                    <MailButtons/>
                </div>
                <div class=" pb-20 col-span-5">
                    <div class=" flex flex-row gap-4 items-center mb-8">
                        <button class="border border-gray-300 p-2 rounded-md hover:bg-gray-50"><ChevronLeft/></button>
                        <p class="font-bold text-lg">Compose Message</p>
                    </div>
                    <div class="border border-gray-300 flex flex-col gap-8 p-6  rounded-md">
                        <div class="flex flex-col relative">
                            <label class="font-semibold mb-2">To</label>
                            <input class="border border-gray-300 p-2 rounded-md transition duration-150 hover:border-indigo-500 " name="text" type="text">
                            <button class="absolute bottom-3 left-3 text-gray-500"><UserRound size="16" /></button>
                        </div>
                        <div class="flex flex-col relative">
                            <label class="font-semibold mb-2">Subject</label>
                            <input class="border border-gray-300 py-2 pl-10 rounded-md transition duration-150 hover:border-indigo-500 " placeholder="Subject" name="text" type="text">
                            <button class="absolute bottom-3 left-3 text-gray-500"><Pencil size="16" /></button>
                        </div>
                        <div>
                            <Editor
                                api-key="kj69rh50evq0gf83xs7vopyta81pneems7rhkat0ym5xf623"
                                :init="{
                                    plugins: 'lists link image table code help wordcount'
                                }"
                            />
                        </div>
                        <div class="flex justify-end mt-10">
                            <button class="bg-indigo-500 text-white flex flex-row gap-4 items-center p-2 rounded-md hover:bg-indigo-600 ">
                            <Send size="16"/>
                            Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>