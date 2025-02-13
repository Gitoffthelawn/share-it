<script setup>
// Label
const label = {
  ja: "QRコードを表示",
  en: "Show QR code",
  "zh-CN": "显示QR码",
  es: "Mostrar código QR",
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  data: $store.tab.url,
  format: "svg",
}).toString();

const run = () => {
  window.open(`https://api.qrserver.com/v1/create-qr-code/?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
