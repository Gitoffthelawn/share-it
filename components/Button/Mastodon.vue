<template>
  <VButton img="/img/mastodon.svg" @click="post()">
    Mastodon
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const post = () => {
  window.open(`https://mstdn.jp/share?text=${$store.tab.title}%20${$store.tab.url}`);
};
</script>
