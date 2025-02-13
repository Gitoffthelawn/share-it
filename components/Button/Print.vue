<script setup>
// Label
const label = {
  ja: "印刷",
  en: "Print",
  "zh-CN": "打印",
  es: "Imprimir"
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  browser.scripting.executeScript({
    target: { tabId: $store.tab.id },
    func: () => { window.print(); },
  });
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
