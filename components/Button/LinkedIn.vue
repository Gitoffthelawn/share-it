<template>
  <VButton img="/img/linkedin.svg" @click="linkedin()">
    LinkedIn
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const linkedin = () => {
  // window.open(`https://linkedin.com/sharing/share-offsite/?url=${$store.tab.url}`);
  window.open(`https://linkedin.com/feed/?shareActive=true&text=${$store.tab.title}%20${$store.tab.url}`);
};
</script>
