<template>
  <div>
    <v-expansion-panels variant="accordion" multiple selected-class="panel-header">
      <v-expansion-panel v-for="(item, i) in list" :key="i" :title="item.name"
        :text="item.description"></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>

<style scoped lang="scss">
.panel-header {
  background-color: red;
}
</style>