<script setup>
defineProps({
    button: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div>
        <button :class="`${button.backgroundColor} ${button.textColor} ${button.bgHover}`" 
        class=" p-2 flex items-center flex-row gap-4 rounded-md">
            <component :is="button.icon" size="16"/>
            <p class="font-medium">{{ button.name }}</p>
            <div class=" text-black py-0.5 px-2.5 rounded-full bg-indigo-50">{{ button.number }}</div>
        </button>
    </div>
</template>