<script setup>
import { Clock3, MessagesSquare, Eye, Twitter, Facebook, Pencil, User, Mail  } from 'lucide-vue-next';
import Comments from '../../components/Comments.vue'
import { ref } from 'vue';
const content =ref([
    {one: 'First, a disclaimer - the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting “Publish,” you might spend several days or maybe even a week “writing” a blog post, but it‘s important to spend those vital hours planning your post and even thinking about Your Post(yes, thinking counts as working if you‘re a blogger) before you actually write it.'},
    {two: 'There‘s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry you‘re working in, as a blogger, you should live and die by this statement.'},
    {three: 'Before you do any of the following steps, be sure to pick a topic that actually interests you. Nothing - and I mean NOTHING- will kill a blog post more effectively than a lack of enthusiasm from the writer. You can tell when a writer is bored by their subject, and it‘s so cringe-worthy it‘s a little embarrassing.'},
    {four: 'I can hear your objections already. “But Dan, I have to blog for a cardboard box manufacturing company.” I feel your pain, I really do. During the course of my career, I‘ve written content for dozens of clients in some less-than-thrilling industries (such as financial regulatory compliance and corporate housing), but the hallmark of a professional blogger is the ability to write well about any topic, no matter how dry it may be. Blogging is a lot easier, however, if you can muster at least a little enthusiasm for the topic at hand.'},
    {subtitle: 'Commodo ultrices orci tempus et fermentum, pellentesque ultricies.'}
]) 

const socialButtons = ref([
    {name: 'Twitter', icon: Twitter, backgroundcolor: 'bg-slate-500', hoverClass: 'hover:bg-slate-700',},
    {name: 'Facebbok', icon: Facebook, backgroundcolor: 'bg-slate-500', hoverClass: 'hover:bg-slate-700',},
    {name: 'Edit', icon: Pencil, backgroundcolor: 'bg-indigo-500', hoverClass: 'hover:bg-indigo-700',}
])

const comments = ref([
    {image: '/images/steve.jpg', name: 'Steve Grace', date: '23 June 2024', text: 'Reprehenderit ut voluptas sapiente ratione nostrum est.'},
    {image: '/images/joram.jpg', name: 'Moses Joram', date: '20 September 2024', text: 'Reprehenderit ut voluptas sapiente ratione nostrum est.'},
    {image: '/images/james.jpg', name: 'James Bravin', date: '12 December 2024', text: 'Reprehenderit ut voluptas sapiente ratione nostrum est.'}
])
</script>
<template>
    <div class="bg-white pb-40 pt-10 px-6">
        <div class=" flex justify-between">
            <div>
                <p class="font-semibold text-xl">How To Get Started Tutorial</p>
                <div class=" flex justify-between items-center mt-6">
                    <div class="px-2 py-1 rounded-md border border-gray-300 flex flex-row gap-2 items-center">
                        <Clock3 size="16" color="#3F51B5" />4d ago
                    </div>
                    <div class="px-2 py-1 rounded-md border border-gray-300 flex flex-row gap-2 items-center">
                        <MessagesSquare size="16" color="#3F51B5"/>12
                    </div>
                    <div class="px-2 py-1 rounded-md border border-gray-300 flex flex-row gap-2 items-center">
                        <Eye size="16" color="#3F51B5" />120
                    </div>
                </div>
            </div>
            <div>
                <div class=" flex justify-center items-center mb-4">
                    <img class="w-16 h-16 rounded-full object-cover " src="/images/image.jpg">
                </div>
                <p class="font-bold mb-4">Paul Wall</p>
            </div>
        </div>
        <div class="pic-box">
            <img class="w-full h-96 object-cover rounded-md" src="/images/nairobi.jpg">
        </div>
        <div class="text-gray-700">
            <p class="font-semibold text-2xl text-black mt-10 mb-5">Sodales massa, morbi convallis</p>
           <div class="leading-7" v-for="(paragraph, index) in content" :key="`id-${index}`">
            <p class="mb-4">{{ paragraph.one }}</p>
            <p class="mb-4">{{ paragraph.two }}</p>
            <p class="mb-4">{{ paragraph.three }}</p>
            <p class="mb-4">{{ paragraph.four }}</p>
            <p class="mb-4 font-semibold text-2xl text-black">{{ paragraph.subtitle }}</p>
           </div>
            
            <ul class="leading-10 text-xl text-gray-500">
                <li>
                    Fermentum neque odio laoreet morbi sit. Venenatis in quam ut non.
                </li>
                <li>
                    Enim in porta facilisi a vulputate fermentum, morbi. Consequat, id praesent tristique euismod pellentesque
                </li>
                <li>
                    Implements This is an external link
                </li>
                <li>
                    Scelerisque ultricies tincidunt lectus faucibus non morbi sed nibh varius. Quam a, habitasse egestaseleifend.
                </li>
            </ul>
            <div class=" p-4 flex justify-between mt-20">
                <div v-for="(content, index) in socialButtons" :key="`id-${index}`" class="flex flex-row gap-4">
                    <button :class="`${content.hoverClass} ${ content.backgroundcolor}`" class="transition duration-150 border py-2 px-4 flex flex-row gap-2 items-center rounded-md text-white ">
                        <component :is="content.icon" size="16"/>{{ content.name }}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div class=" w-40 h-10 flex justify-around items-center mb-6 mt-20">
                <p class="font-bold text-lg">Comments</p>
                <button class="border px-2 py-1 rounded-lg">4</button>
            </div>
            <div class="flex flex-col gap-4">
                <comments v-for="(info, index) in comments" :key="`id-${index}`" :content="info" />
            </div>
        </div>
        <div>
            <p>Post a Comment</p>
            <div class="flex flex-col gap-4">
                <div class="relative">
                    <input class="border border-gray-300 p-2 pl-8 w-full rounded-md hover:indigo-500 hover:border-indigo-500"  type="name" placeholder="Name">
                    <User class="absolute left-1 bottom-3  text-gray-500" size="20"/>
                </div>
                <div class="relative">
                    <input class="border border-gray-300 p-2 pl-8 w-full rounded-md hover:indigo-500 hover:border-indigo-500" type="email" placeholder="Email">
                    <Mail class="absolute text-gray-500 left-1.5 bottom-2.5" size="20"/>
                </div>
                <textarea class="border border-gray-300 pb-20 pl-2 pt-2 rounded-md hover:border-indigo-500"  placeholder="Your comment"></textarea>
            </div>
            <div class="flex justify-between mt-4">
                <div></div>
                <button class="rounded-md px-4 py-2 bg-indigo-500 hover:bg-indigo-600 hover:duration-150 text-white text-center">
                    Post Comment
                </button>
            </div>
        </div>
    </div>
</template>