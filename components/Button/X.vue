<template>
  <VButton img="/img/x.svg" @click="post()">
    X
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const post = () => {
  window.open(`https://x.com/intent/post?text=${$store.tab.title}&url=${$store.tab.url}`);
};
</script>
