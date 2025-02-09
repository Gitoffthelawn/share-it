<template>
  <VButton img="/img/line.svg" @click="line()">
    LINE
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const line = () => {
  window.open(`https://line.me/R/msg/text/?${$store.tab.title}%0D%0A${$store.tab.url}`);
};
</script>
