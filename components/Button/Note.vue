<template>
  <VButton img="/img/note.svg" @click="note()">
    note
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  url: $store.tab.url,
}).toString();

const note = () => {
  window.open(`https://note.com/intent/post?${params}`);
};
</script>
