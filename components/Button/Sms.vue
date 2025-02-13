<script setup>
// Label
const label = {
  ja: "SMSで送信",
  en: "Send via SMS",
  "zh-CN": "通过短信发送",
  es: "Enviar por SMS"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  body: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const run = () => {
  window.open(`sms:?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
