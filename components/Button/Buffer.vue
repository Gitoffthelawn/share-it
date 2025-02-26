<script lang="ts" setup>
// Label
const label = {
  ja: "Bufferに投稿",
  en: "Post to Buffer",
  "zh-cn": "分享到Buffer",
  es: "Compartir en Buffer",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    url: $store.tab?.url || "",
    text: $store.tab?.title || "",
  }).toString();

  window.open(`https://buffer.com/add?${params}`);
};

// Image
const img = "/img/buffer.svg";
</script>

<template>
	<VButton :img :label @click="run()" darkLogo />
</template>
