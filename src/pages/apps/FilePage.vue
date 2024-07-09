<template>
  <div class="select-menu">
    <select v-model="selectedOption">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <p>Selected: {{ selectedOption }}</p>
  </div>

</template>

<script setup>
import { ref } from 'vue'

// State management
const selectedOption = ref(null)

// Dropdown options
const options = ref(['Option 1', 'Option 2', 'Option 3'])
</script>

<style scoped>
.select-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

select {
  margin: 10px 0;
  padding: 5px;
}
</style>
