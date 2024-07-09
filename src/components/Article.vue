<script setup>

defineProps({
    article: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="photo-container relative">
        <img :src="article.image">
        <div class="profile-container absolute -bottom-7 right-6 ">
            <img class="w-16 h-16 rounded-full object-cover" :src="article.profilePic">
        </div>
    </div>
    <div class="px-4 pb-2">                  
        <div class="text-box border border-black mt-7">
            <p class="font-bold text-lg">{{ article.title }}</p>
            <div>
                <p>{{article.text}}</p>
            </div>
        </div>
        <div class="icons-box flex justify-between border border-black h-10">
            <div class="border border-black flex flex-row gap-1 items-center">
                <component :is="article.message.icon" size="16"/>
                <p class="font-semibold">{{ article.message.comments }}</p>
            </div>
            <div class="border border-black flex flex-row gap-1 items-center">
                <component :is="article.share.icon" size="16"/>
                <p class="font-semibold">{{ article.share.number }}</p>
            </div>
            <div class="border border-black flex flex-row gap-1 items-center">
                <component :is="article.date.icon" size="16"/>
                <p class="font-semibold">{{ article.date.month }}</p>
            </div>
        </div>
    </div >
</template>