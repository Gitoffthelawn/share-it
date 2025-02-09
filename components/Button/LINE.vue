<template>
  <VButton img="/img/line.svg" @click="line()">
    LINE
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const line = () => {
  window.open(`https://line.me/R/msg/text/?${store.state.tab.title}%0D%0A${store.state.tab.url}`);
};
</script>
