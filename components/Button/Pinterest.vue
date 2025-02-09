<template>
  <VButton img="/img/pinterest.svg" @click="pin()">
    Pinterest
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const pin = () => {
  window.open(`https://pinterest.com/pin/create/button/?url=${$store.tab.url}&description=${$store.tab.title}`);
};
</script>
