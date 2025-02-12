<template>
  <VButton img="/img/linkedin.svg" @click="linkedin()">
    LinkedIn
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  shareActive: 'true',
  text: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const linkedin = () => {
  window.open(`https://linkedin.com/feed/?${params}`);
};
</script>
