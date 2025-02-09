<template>
  <VButton img="/img/threads.svg" @click="post()">
    Threads
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const post = () => {
  window.open(`https://threads.net/intent/post?text=${$store.tab.title}%20${$store.tab.url}`);
};
</script>
