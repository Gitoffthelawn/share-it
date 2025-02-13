<template>
  <VButton img="/img/threads.svg" @click="post()" darkLogo>
    Threads
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const post = () => {
  window.open(`https://threads.net/intent/post?${params}`);
};
</script>
