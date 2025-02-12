<template>
  <VButton img="/img/pinterest.svg" @click="pin()">
    Pinterest
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  description: $store.tab.title,
  url: $store.tab.url,
}).toString();

const pin = () => {
  window.open(`https://pinterest.com/pin/create/button/?${params}`);
};
</script>
