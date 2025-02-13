<script setup>
// Label
const label = {
  ja: "はてなブックマーク",
  en: "Hatena Bookmark",
  "zh-CN": "分享到Hatena",
  es: "Guardar en Hatena"
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  window.open(`https://b.hatena.ne.jp/entry/${$store.tab.url}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
