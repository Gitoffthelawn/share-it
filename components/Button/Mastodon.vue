<script setup>
// Label
const label = {
  ja: "Mastodonに投稿",
  en: "Post to Mastodon",
  "zh-CN": "分享到Mastodon",
  es: "Publicar en Mastodon"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  text: `${$store.tab.title} ${$store.tab.url}`,
}).toString();

const run = () => {
  window.open(`https://mstdn.jp/share?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
