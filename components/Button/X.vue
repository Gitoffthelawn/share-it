<template>
  <VButton img="/img/x.svg" @click="post()">
    X
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: $store.tab.title,
  url: $store.tab.url,
}).toString();

const post = () => {
  window.open(`https://x.com/intent/post?${params}`);
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
