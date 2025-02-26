<script lang="ts" setup>
// Label
const label = {
  ja: "Facebookに投稿",
  en: "Share on Facebook",
  "zh-cn": "分享到Facebook",
  es: "Compartir en Facebook",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    u: $store.tab?.url || "",
  }).toString();

  window.open(`https://www.facebook.com/sharer/sharer.php?${params}`);
};

// Image
const img = "/img/facebook.svg";
</script>

<template>
	<VButton :label @click="run()" :img />
</template>
