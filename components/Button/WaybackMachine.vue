<template>
  <VButton img="/img/archive.svg" @click="search()">
    Wayback Machine
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const search = () => {
  window.open(`https://web.archive.org/web/*/${store.state.tab.url}`);
};
</script>

<style scoped>
::v-deep(img) {
  @media (prefers-color-scheme: dark) {
    filter: brightness(8000%);
    opacity: .6;
  }
}
</style>
