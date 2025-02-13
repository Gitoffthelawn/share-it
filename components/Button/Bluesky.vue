<script setup>
// Label
const label = {
  ja: "Blueskyに投稿",
  en: "Post to Bluesky",
  "zh-CN": "分享到Bluesky",
  es: "Publicar en Bluesky"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const run = () => {
  window.open(`https://bsky.app/intent/compose?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
