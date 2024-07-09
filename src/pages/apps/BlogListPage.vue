<script setup>
import { ref } from 'vue';
import { MessageCircle, Share2, Clock3 } from 'lucide-vue-next';
import Article from '@/components/Article.vue'
const selectedOption = ref(null)
const options = ref(['Most Shared', 'Most Commented'])

const articles = ref([
    { image: '/images/nature1.jpg', profilePic: '/images/image.jpg', title: 'Blog', text: 'Ornare egestas pellentesque', message: {icon: MessageCircle, comments: 2}, share: {icon: Share2, number: 7}, date: {icon: Clock3, month: 'Sep'}},
    { image: '/images/nature2.jpg', profilePic: '/images/image.jpg', title: 'Magazine', text: 'Ornare egestas pellentesque', message: {icon: MessageCircle, comments: 14}, share: {icon: Share2, number: 10}, date: {icon: Clock3, month: 'Jan'}},
    { image: '/images/nature3.jpg', profilePic: '/images/image.jpg', title: 'Science', text: 'Ornare egestas pellentesque', message: {icon: MessageCircle, comments: 8}, share: {icon: Share2, number: 5}, date: {icon: Clock3, month: 'Oct'}}
]) 

</script>
<template>
    <div>
        <div class="border border-black bg-white w-full">
            <div class="border-y border-gray-200 bg-gray-50 my-4 py-5 px-4 flex justify-between items-center">
                <p class="font-semibold text-xl">Articles</p>
                <select class="w-52 py-2 rounded-md px-2 border border-gray-300 hover:border-indigo-500" v-model="selectedOption">
                    <option v-for="option in  options" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>
            </div>
            <div class="w-72 bg-gray-100 border border-black rounded-md">
                 
                <Article v-for="(article, index) in articles" :key="`root-${index}`" :article="article" />
            </div>
        </div>
    </div>
</template>