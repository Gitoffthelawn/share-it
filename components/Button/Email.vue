<template>
  <VButton img="/img/email.svg" @click="mailto()">
    Email
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const mailto = () => {
  window.open(`mailto:info@sample.com?subject=${$store.tab.title}&body=${$store.tab.url}`);
};
</script>
