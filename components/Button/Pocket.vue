<script setup>
// Label
const label = {
  ja: "Pocketに保存",
  en: "Save to Pocket",
  "zh-CN": "保存到Pocket",
  es: "Guardar en Pocket"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  url: $store.tab.url,
}).toString();

const run = () => {
  window.open(`https://getpocket.com/save?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
