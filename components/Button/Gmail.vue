<template>
  <VButton img="/img/gmail.svg" @click="mailto()">
    Gmail
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  su: $store.tab.title,
  body: $store.tab.url,
  fs: 1,
  tf: 1,
  view: "cm",
}).toString();

const mailto = () => {
  window.open(`https://gmail.google.com/gmail?${params}`);
};
</script>
