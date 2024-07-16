<script setup>
import { ref } from 'vue';
import { MessageCircle, Share2, Clock3, Info } from 'lucide-vue-next';
import Article from '@/components/Article.vue'
import RecentArticles from '../../components/RecentArticles.vue'
import { SubTitle } from 'chart.js';
const selectedOption = ref(null)
const options = ref(['Most Shared', 'Most Commented'])

const articles = ref([
    {
        id: 1, image: '/images/nature1.jpg',
        profilePic: '/images/image.jpg', 
        title: 'Blog', 
        text: 'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed', 
        message: {icon: MessageCircle, comments: 2}, 
        share: {icon: Share2, number: 7}, 
        date: {icon: Clock3, month: 'Sep'}
    },

    {
        id: 2, image: '/images/nature2.jpg', 
        profilePic: '/images/image.jpg', 
        title: 'Magazine', 
        text: 'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed', 
        message: {icon: MessageCircle, comments: 14}, 
        share: {icon: Share2, number: 10}, 
        date: {icon: Clock3, month: 'Jan'}
    },

    {
        id: 3, image: '/images/nature3.jpg', 
        profilePic: '/images/image.jpg', 
        title: 'Science', 
        text: 'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed', 
        message: {icon: MessageCircle, comments: 8}, 
        share: {icon: Share2, number: 5}, 
        date: {icon: Clock3, month: 'Oct'}
    }
]) 

const RecentInfo =ref([
    {
        title: 'Animal',
        color: 'text-blue-500',
        subtitle:'Why Earth\‘s most beloved creatures are headed toward extinction',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/joram.jpg',
        name: 'Joram Moses',
        date: 'Jun 16, 2024',
        backgroundcolor: 'bg-blue-500'
    },
    {
        title: 'Oxygen',
        color: 'text-pink-500',
        subtitle:'Only one-third of tropical rainforests remain intact, study says',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/james.jpg',
        name: 'Sean James',
        date: 'Jun 16, 2024',
        backgroundcolor: 'bg-pink-500'
    },
    {
        title: 'Nature',
        color: 'text-orange-500',
        subtitle:'Does planting a tree really offset your carbon footprint?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/steve.jpg',
        name: 'steve Grace',
        date: 'Jun 16, 2024',
        backgroundcolor: 'bg-orange-500'
    }
])

</script>
<template>
    <div class="px-8 pb-10">
        <div class="border border-gray-300 rounded-xl bg-white w-full pt-8 pb-28 px-10">
            <div class="border-y border-gray-200 bg-gray-50 mb-4 py-5 px-4 flex justify-between items-center">
                <p class="font-semibold text-xl">Articles</p>
                <select class="w-52 py-2 rounded-md px-2 border border-gray-300 hover:border-indigo-500" v-model="selectedOption">
                    <option v-for="option in  options" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>
            </div>
            <div class="grid grid-cols-3 gap-6" >
                  <Article v-for="article in articles" :key="article.id" :article="article" />
            </div>
        </div>
        <div class=" bg-white rounded-xl px-28 py-28 mt-8">
            <div>
                <p class="font-bold text-4xl pb-6">Recent Articles</p>
                <p class="text-gray-700 text-lg">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="grid grid-cols-3 gap-10 mt-10">
                <RecentArticles v-for="(info, index) in RecentInfo" :key="`id-${index}`" :details="info"/>
            </div>
        </div>
    </div>
</template>