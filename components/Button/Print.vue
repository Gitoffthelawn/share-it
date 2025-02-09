<template>
  <VButton img="/img/print.svg" @click="print()">
    {{ $store.state.isEn ? 'Print' : '印刷' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const print = () => {
  browser.scripting.executeScript({
    target: { tabId: store.state.tab.id },
    func: () => { window.print(); },
  });
};
</script>
