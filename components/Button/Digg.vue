<script lang="ts" setup>
// Label
const label = {
  ja: "Diggに共有",
  en: "Share on Digg",
  "zh-CN": "分享到Digg",
  es: "Compartir en Digg",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    url: $store.tab?.url || "",
  }).toString();

  window.open(`https://digg.com/submit?${params}`);
};

// Image
const img = "/img/digg.svg";
</script>

<template>
  <VButton :img :label @click="run()" darkLogo />
</template>
