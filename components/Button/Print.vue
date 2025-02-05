<template>
  <VButton img="/img/print.svg" @click="print()">
    {{ $store.state.isEn ? 'Print' : '印刷' }}
  </VButton>
</template>

<script>
export default {
  name: 'Print',
  methods: {
    print() {
      browser.scripting.executeScript({
        target: { tabId: this.$store.state.tab.id },
        func: () => { window.print(); },
      });
    }
  }
}
</script>
