<template>
  <VButton img="/img/x.svg" @click="post()" darkLogo>
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
