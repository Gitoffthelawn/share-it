<script setup>
// Label
const label = {
  ja: "LinkedInに投稿",
  en: "Share on LinkedIn",
  "zh-CN": "分享到LinkedIn",
  es: "Compartir en LinkedIn"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  shareActive: 'true',
  text: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const run = () => {
  window.open(`https://linkedin.com/feed/?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
