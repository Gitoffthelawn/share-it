<template>
  <VButton img="/img/gmail.svg" @click="mailto()">
    Gmail
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const mailto = () => {
  window.open(`https://gmail.google.com/gmail?fs=1&tf=1&view=cm&su=${$store.tab.title}&body=${$store.tab.url}`);
};
</script>
