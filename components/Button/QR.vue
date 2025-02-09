<template>
  <VButton img="/img/qr.svg" @click="showQr()">
    {{ $store.state.isEn ? 'QR Code' : 'QRコード' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const showQr = () => {
  // window.open(`https://chart.googleapis.com/chart?cht=qr&chs=240x240&chl=${store.state.tab.url}&choe=UTF-8`);
  window.open(`https://api.qrserver.com/v1/create-qr-code/?data=${store.state.tab.url}&format=svg`);
};
</script>
