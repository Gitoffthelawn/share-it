<template>
  <VButton img="/img/qr.svg" @click="showQr()">
    {{ $store.state.isEn ? 'QR Code' : 'QRコード' }}
  </VButton>
</template>

<script>
export default {
  name: 'QR',
  methods: {
    showQr() {
      // window.open(`https://chart.googleapis.com/chart?cht=qr&chs=240x240&chl=${this.$store.state.tab.url}&choe=UTF-8`);
      window.open(`https://api.qrserver.com/v1/create-qr-code/?data=${this.$store.state.tab.url}&format=svg`);
    }
  }
}
</script>
