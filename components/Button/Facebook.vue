<script setup>
// Label
const label = {
  ja: "Facebookに投稿",
  en: "Share on Facebook",
  "zh-CN": "分享到Facebook",
  es: "Compartir en Facebook"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  u: $store.tab.url,
}).toString();

const run = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
