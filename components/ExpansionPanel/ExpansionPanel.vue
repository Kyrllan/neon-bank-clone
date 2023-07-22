<template>
  <div>
    <v-expansion-panels variant="accordion" multiple class="panels">
      <v-expansion-panel v-for="(item, i) in list" :key="i" elevation="0" class="panel">
        <div class="panel-item">
          <v-expansion-panel-title class="p-title" expand-icon="" collapse-icon="">
            <div class="panel-title">
              <v-icon size="20">mdi-plus</v-icon>
              <span class="pl-2">
                {{ item.name }}
              </span>

            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="panel-text">
            {{ item.description }}
            <div class="panel-text-link">
              {{ item.link }}
            </div>
          </v-expansion-panel-text>
        </div>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
//import { defineProps } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>

<style scoped lang="scss">
:deep(.panels.v-expansion-panels.v-expansion-panels--variant-accordion) {
  display: flex;
  align-items: center;
}

:deep(.panel.v-expansion-panel::after) {
  border: none !important;
}

/* :deep(.p-title.v-expansion-panel-title.v-expansion-panel-title--active.p-title) {
  background-color: rgb(var(--v-theme-nLightBlue));
} */

.panel-item {
  margin: 0 0 20px;
  border: 1px solid rgb(var(--v-theme-nBlack));
  border-radius: 22px 22px 22px 5px;
  background-color: rgb(var(--v-theme-nWhite));
}

.panel-title {
  display: flex;
  align-items: center;
  font-family: Epilogue, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 150%;
  margin-top: 6px;
  color: rgb(var(--v-theme-nText));
}

.panel-text {
  padding: 1rem;
  font-family: Epilogue, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  color: rgb(var(--v-theme-nText));
}

.panel-text-link{
  padding-top: 1.25rem;
  font-family: Epilogue, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  color: rgb(var(--v-theme-nBlue2));
  cursor: pointer;

}
</style>