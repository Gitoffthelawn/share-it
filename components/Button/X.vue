<template>
  <VButton img="/img/x.svg" @click="post()">
    X
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const post = () => {
  window.open(`https://x.com/intent/post?text=${store.state.tab.title}&url=${store.state.tab.url}`);
};
</script>
