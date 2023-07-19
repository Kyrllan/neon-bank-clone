<template>
  <div class="text-center">
    <v-menu open-on-hover open-delay="50" close-delay="50">
      <template v-slot:activator="{props}">
        <div class="menu-title" v-bind="props">
          <span class="mr-2 text-decoration">{{ name }}</span>
          <font-awesome-icon class="rotate-icon" icon="chevron-down" />
        </div>
      </template>

      <v-list class="mt-4">
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.menu-title {
  color: rgb(var(--v-theme-nBlack));
  font-size: 18px;
  font-weight: bold;
  font-family: 'Epilogue';

  .rotate-icon {
    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
  }
  .text-decoration {
    text-decoration: none;
    position: relative;
  }

  &:hover {
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

    .rotate-icon {
      -webkit-transform: rotateZ(-180deg);
      -moz-transform: rotateZ(-180deg);
      transform: rotateZ(-180deg);
    }
  }
}
</style>
