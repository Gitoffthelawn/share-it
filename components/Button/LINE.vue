<template>
  <VButton img="/img/line.svg" @click="line()">
    LINE
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: $store.tab.title,
  url: $store.tab.url,
}).toString();

const line = () => {
  window.open(`https://social-plugins.line.me/lineit/share?${params}`);
};
</script>
