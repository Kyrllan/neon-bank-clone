<template>
  <div>
    <div @click="collapsed = !collapsed" class="title">{{ name }}<v-spacer></v-spacer>
      <font-awesome-icon :icon="collapsed ? 'chevron-up' : 'chevron-down'" />
    </div>
    <v-list v-show="collapsed" style="width:100%">
      <v-list-item class="pa-4" v-for="(item, index) in items" :key="index" :value="index">
        <v-list-item-title class="list-title">
          <span>{{ item.title }}</span>
          <v-spacer></v-spacer>
          <span v-if="item.new" class="new-item">novo</span>
        </v-list-item-title>
        <v-list-item-subtitle class="list-description">{{ item.description }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { /* defineProps ,*/ ref } from 'vue';
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

let collapsed = ref(false);

</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  color: rgb(var(--v-theme-nBlack));
  font-size: 18px;
  font-weight: bold;
  font-family: 'Epilogue';
  padding: 1rem 0;
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