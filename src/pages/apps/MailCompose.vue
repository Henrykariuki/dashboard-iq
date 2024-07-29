<script setup>
import emailButtons from '@/pages/apps/MailInbox.vue'
import MailButtons from '@/components/MailButtons.vue';
import { ref } from 'vue';

const buttonsTwo = ref(emailButtons);
</script>
<template>
    <div>
        <div class="grid grid-cols-6">
            <div class="border border-black bg-white h-60">
                <MailButtons v-for="(info, index) in buttonsTwo" :key="`id-${index}`" />
            </div>
            <div class="border border-black bg-white h-60 col-span-5"></div>
        </div>
    </div>
</template>