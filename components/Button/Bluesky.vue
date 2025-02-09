<template>
  <VButton img="/img/bluesky.svg" @click="post()">
    Bluesky
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const post = () => {
  window.open(`https://bsky.app/intent/compose?text=${$store.tab.title}%20${$store.tab.url}`);
};
</script>
