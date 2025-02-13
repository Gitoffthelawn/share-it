<template>
  <VButton img="/img/archive.svg" @click="search()" darkLogo>
    Wayback Machine
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const search = () => {
  window.open(`https://web.archive.org/web/*/${$store.tab.url}`);
};
</script>
