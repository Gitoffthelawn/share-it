<template>
  <VButton img="/img/qr.svg" @click="showQr()">
    {{ $store.isEn ? 'QR Code' : 'QRコード' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  data: $store.tab.url,
  format: "svg",
}).toString();

const showQr = () => {
  window.open(`https://api.qrserver.com/v1/create-qr-code/?${params}`);
};
</script>
