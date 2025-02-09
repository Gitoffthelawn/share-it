<template>
  <VButton img="/img/linkedin.svg" @click="linkedin()">
    LinkedIn
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const linkedin = () => {
  // window.open(`https://linkedin.com/sharing/share-offsite/?url=${store.state.tab.url}`);
  window.open(`https://linkedin.com/feed/?shareActive=true&text=${store.state.tab.title}%20${store.state.tab.url}`);
};
</script>
