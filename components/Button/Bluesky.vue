<template>
  <VButton img="/img/bluesky.svg" @click="post()">
    Bluesky
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const post = () => {
  window.open(`https://bsky.app/intent/compose?${params}`);
};
</script>
