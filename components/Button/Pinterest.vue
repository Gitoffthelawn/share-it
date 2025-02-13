<script setup>
// Label
const label = {
  ja: "Pinterestに保存",
  en: "Save to Pinterest",
  "zh-CN": "保存到Pinterest",
  es: "Guardar en Pinterest"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  description: $store.tab.title,
  url: $store.tab.url,
}).toString();

const run = () => {
  window.open(`https://pinterest.com/pin/create/button/?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
