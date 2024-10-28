<script setup>

defineProps({
    article: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class=" bg-gray-100  rounded-md flex flex-col justify-between md:max-w-96">
        <div class="photo-container relative">
            <img class="w-full rounded-md" :src="article.image">
            <div class="profile-container absolute -bottom-7 right-6 ">
                <img class="w-16 h-16 rounded-full object-cover" :src="article.profilePic">
            </div>
        </div>
        <div class="px-4 pb-2">                  
            <div class="text-box  mt-7">
                <p class="font-bold text-lg">{{ article.title }}</p>
                <div class="mt-2 mb-8">
                    <p>{{article.text}}</p>
                </div>
            </div>
            <div class="icons-box flex justify-between  h-10">
                <div class=" flex flex-row gap-1 items-center">
                    <component :is="article.message.icon" size="16"/>
                    <p class="font-semibold">{{ article.message.comments }}</p>
                </div>
                <div class=" flex flex-row gap-1 items-center">
                    <component :is="article.share.icon" size="16"/>
                    <p class="font-semibold">{{ article.share.number }}</p>
                </div>
                <div class=" flex flex-row gap-1 items-center">
                    <component :is="article.date.icon" size="16"/>
                    <p class="font-semibold">{{ article.date.month }}</p>
                </div>
            </div>
        </div >
    </div>
</template>