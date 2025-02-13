<script setup>
// Label
const label = {
  ja: "Xに投稿",
  en: "Post to X",
  "zh-CN": "分享到X",
  es: "Compartir en X",
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: $store.tab.title,
  url: $store.tab.url,
}).toString();

const run = () => {
  window.open(`https://x.com/intent/post?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :img :label @click="run()" darkLogo />
</template>
