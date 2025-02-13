<script setup>
// Label
const label = {
  ja: "Gmailで送信",
  en: "Send via Gmail",
  "zh-CN": "通过Gmail发送",
  es: "Enviar por Gmail",
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  su: $store.tab.title,
  body: $store.tab.url,
  fs: 1,
  tf: 1,
  view: "cm",
}).toString();

const run = () => {
  window.open(`https://gmail.google.com/gmail?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
