<script setup>
// Label
const label = {
  ja: "メールで送信",
  en: "Send via Email",
  "zh-CN": "通过邮件发送",
  es: "Enviar por correo"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  subject: $store.tab.title,
  body: $store.tab.url,
}).toString();

const run = () => {
  window.open(`mailto:?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
