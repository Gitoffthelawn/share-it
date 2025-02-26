<script lang="ts" setup>
// Label
const label = {
  ja: "LINEで送る",
  en: "Share on LINE",
  "zh-cn": "分享到LINE",
  es: "Compartir en LINE",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    text: $store.tab?.title || "",
    url: $store.tab?.url || "",
  }).toString();

  window.open(`https://social-plugins.line.me/lineit/share?${params}`);
};

// Image
const img = "/img/line.svg";
</script>

<template>
	<VButton :label @click="run()" :img />
</template>
