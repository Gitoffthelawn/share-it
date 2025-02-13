<script setup>
// Label
const label = {
  ja: "Tumblrに投稿",
  en: "Post to Tumblr",
  "zh-CN": "分享到Tumblr",
  es: "Publicar en Tumblr"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  canonicalUrl: $store.tab.url,
  title: $store.tab.title,
}).toString();

const run = () => {
  window.open(`https://www.tumblr.com/widgets/share/tool?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img darkLogo />
</template>
