<template>
  <VButton img="/img/facebook.svg" @click="fb()">
    Facebook
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const fb = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${$store.tab.url}`);
};
</script>
