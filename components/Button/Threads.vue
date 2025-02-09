<template>
  <VButton img="/img/threads.svg" @click="post()">
    Threads
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const post = () => {
  window.open(`https://threads.net/intent/post?text=${store.state.tab.title}%20${store.state.tab.url}`);
};
</script>
