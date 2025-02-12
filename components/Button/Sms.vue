<template>
  <VButton img="/img/sms.svg" @click="sms()">
    SMS
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  body: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const sms = () => {
  window.open(`sms:?${params}`);
};
</script>
