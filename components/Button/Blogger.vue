<template>
  <VButton img="/img/blogger.svg" @click="post()">
    Blogger
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  n: $store.tab.title,
  u: $store.tab.url,
}).toString();

const post = () => {
  window.open(`https://www.blogger.com/blog-this.g?${params}`);
};
</script>
