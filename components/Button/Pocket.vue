<template>
  <VButton img="/img/pocket.svg" @click="save()">
    Pocket
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  url: $store.tab.url,
}).toString();

const save = () => {
  window.open(`https://getpocket.com/save?${params}`);
};
</script>
