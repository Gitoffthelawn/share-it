<script lang="ts" setup>
// Label
const label = {
  ja: "Threadsに投稿",
  en: "Post to Threads",
  "zh-CN": "分享到Threads",
  es: "Publicar en Threads"
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {

  const params = new URLSearchParams({
    text: `${$store.tab?.title} ${$store.tab?.url}`,
  }).toString();

  window.open(`https://threads.net/intent/post?${params}`);
};

// Image
const img = "/img/threads.svg";
</script>

<template>
  <VButton :label @click="run()" :img darkLogo />
</template>
