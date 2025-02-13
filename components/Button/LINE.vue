<script setup>
// Label
const label = {
  ja: "LINEで送る",
  en: "Share on LINE",
  "zh-CN": "分享到LINE",
  es: "Compartir en LINE"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: $store.tab.title,
  url: $store.tab.url,
}).toString();

const run = () => {
  window.open(`https://social-plugins.line.me/lineit/share?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
