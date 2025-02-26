<script lang="ts" setup>
// Label
const label = {
  ja: "印刷",
  en: "Print",
  "zh-cn": "打印",
  es: "Imprimir",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const tabId = $store.tab?.id || 0;

  browser.scripting.executeScript({
    target: { tabId },
    func: () => {
      window.print();
    },
  });
};

// Image
const img = "/img/print.svg";
</script>

<template>
	<VButton :label @click="run()" :img />
</template>
