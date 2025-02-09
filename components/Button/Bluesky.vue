<template>
  <VButton img="/img/bluesky.svg" @click="post()">
    Bluesky
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const post = () => {
  window.open(`https://bsky.app/intent/compose?text=${store.state.tab.title}%20${store.state.tab.url}`);
};
</script>
