<template>
  <VButton img="/img/qr.svg" @click="showQr()">
    {{ $store.isEn ? 'QR Code' : 'QRコード' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const showQr = () => {
  // window.open(`https://chart.googleapis.com/chart?cht=qr&chs=240x240&chl=${$store.tab.url}&choe=UTF-8`);
  window.open(`https://api.qrserver.com/v1/create-qr-code/?data=${$store.tab.url}&format=svg`);
};
</script>
