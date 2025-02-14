<script lang="ts" setup>
// Label
const label = {
  ja: "QRコードを表示",
  en: "Show QR code",
  "zh-CN": "显示QR码",
  es: "Mostrar código QR",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {

  const params = new URLSearchParams({
    data: $store.tab?.url || "",
    format: "svg",
  }).toString();

  window.open(`https://api.qrserver.com/v1/create-qr-code/?${params}`);
};

// Image
const img = "/img/qr.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
