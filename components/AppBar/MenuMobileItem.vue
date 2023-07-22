<template>
  <div class="menu-title" v-bind="props">
    <span class="mr-2 text-decoration">{{ name }}</span>
  </div>
</template>

<script setup>
//import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: '',
  },
});
</script>

<style scoped lang="scss">
.menu-title {
  display: flex;
  align-items: center;
  color: rgb(var(--v-theme-nBlack));
  font-size: 18px;
  font-weight: bold;
  font-family: 'Epilogue';
  padding: 1rem 1rem;
}
</style>
