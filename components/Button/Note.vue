<template>
  <VButton img="/img/note.svg" @click="note()">
    note
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const note = () => {
  window.open(`https://note.com/intent/post?url=${$store.tab.url}`);
};
</script>
