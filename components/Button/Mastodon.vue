<template>
  <VButton img="/img/mastodon.svg" @click="post()">
    Mastodon
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const post = () => {
  window.open(`https://mstdn.jp/share?text=${store.state.tab.title}%20${store.state.tab.url}`);
};
</script>
