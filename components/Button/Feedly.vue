<script setup>
// Label
const label = {
  ja: "FeedlyでRSSを探す",
  en: "Search RSS on Feedly",
  "zh-CN": "在Feedly中搜索RSS",
  es: "Buscar RSS en Feedly"
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  window.open(`https://feedly.com/i/discover/sources/search/feed/${$store.tab.url}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
