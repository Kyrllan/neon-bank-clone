<template>
  <div class="text-center">
    <v-menu open-on-hover open-delay="50" close-delay="50" offset="0 120">
      <template v-slot:activator="{ props }">
        <div class="menu-title" v-bind="props">
          <span class="mr-2 text-decoration">{{ name }}</span>
          <font-awesome-icon class="rotate-icon" icon="chevron-down" />
        </div>
      </template>

      <v-list style="width: 300px;">
        <v-list-item class="pa-4" v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title class="list-title">
            <span>{{ item.title }}</span>
            <v-spacer></v-spacer>
            <span v-if="item.new" class="new-item">novo</span>
          </v-list-item-title>
          <v-list-item-subtitle class="list-description">{{ item.description }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

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

.list-title {
  display: flex;
  color: rgb(var(--v-theme-nBlack));
  font-size: 16px;
  font-weight: bold;
  font-family: 'Epilogue';
}

.new-item {
  background-color: rgb(var(--v-theme-nBlue));
  color: rgb(var(--v-theme-nWhite));
  font-size: 12px;
  font-weight: 100;
  padding: 0 5px;
  position: absolute;
  right: 16px;
  border-radius: 15px;
}

.list-description {
  padding-top: 4px;
  display: flex;
  flex-wrap: wrap;
  color: rgb(var(--v-theme-nBlack));
  font-family: 'Epilogue';
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem
}
</style>
