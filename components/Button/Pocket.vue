<template>
  <VButton img="/img/pocket.svg" @click="save()">
    Pocket
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const save = () => {
  window.open(`https://getpocket.com/save?url=${$store.tab.url}`);
};
</script>
