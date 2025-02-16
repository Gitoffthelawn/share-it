<script lang="ts" setup>
// Label
const label = {
  ja: "Flipboardに共有",
  en: "Share on Flipboard",
  "zh-CN": "分享到Flipboard",
  es: "Compartir en Flipboard",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    title: $store.tab?.title || "",
    url: $store.tab?.url || "",
  }).toString();

  window.open(`https://share.flipboard.com/bookmarklet/popout?${params}`);
};

// Image
const img = "/img/flipboard.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
