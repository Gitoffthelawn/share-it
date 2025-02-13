<script setup>
// Label
const label = {
  ja: "Threadsに投稿",
  en: "Post to Threads",
  "zh-CN": "分享到Threads",
  es: "Publicar en Threads"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const run = () => {
  window.open(`https://threads.net/intent/post?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img darkLogo />
</template>
