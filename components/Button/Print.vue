<template>
  <VButton img="/img/print.svg" @click="print()">
    {{ $store.isEn ? 'Print' : '印刷' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const print = () => {
  browser.scripting.executeScript({
    target: { tabId: $store.tab.id },
    func: () => { window.print(); },
  });
};
</script>
