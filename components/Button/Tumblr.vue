<template>
  <VButton img="/img/tumblr.svg" @click="post()" darkLogo>
    Tumblr
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  canonicalUrl: $store.tab.url,
  title: $store.tab.title,
}).toString();

const post = () => {
  window.open(`https://www.tumblr.com/widgets/share/tool?${params}`);
};
</script>
