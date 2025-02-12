<template>
  <VButton img="/img/email.svg" @click="mailto()">
    Email
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  subject: $store.tab.title,
  body: $store.tab.url,
}).toString();

const mailto = () => {
  window.open(`mailto:?${params}`);
};
</script>
