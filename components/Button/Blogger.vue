<script setup>
// Label
const label = {
  ja: "Bloggerに投稿",
  en: "Post to Blogger",
  "zh-CN": "分享到Blogger",
  es: "Publicar en Blogger"
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  n: $store.tab.title,
  u: $store.tab.url,
}).toString();

const run = () => {
  window.open(`https://www.blogger.com/blog-this.g?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
