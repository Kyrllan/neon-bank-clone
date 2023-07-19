<template>
  <div class="menu-title" v-bind="props">
    <span class="mr-2 text-decoration">{{ name }}</span>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

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
  color: rgb(var(--v-theme-nBlack));
  font-size: 18px;
  font-weight: bold;
  font-family: 'Epilogue';

  .text-decoration {
    text-decoration: none;
    position: relative;
  }

  &:hover {
    cursor: pointer;
    padding-bottom: 2px;
    .text-decoration::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 2px;
      background-color: rgb(var(--v-theme-nBlue));
    }
  }
}
</style>
