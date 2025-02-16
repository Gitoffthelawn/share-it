<script lang="ts" setup>
// Label
const label = {
  ja: "Telegramで共有",
  en: "Share on Telegram",
  "zh-CN": "分享到Telegram",
  es: "Compartir en Telegram",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    text: $store.tab?.title || "",
    url: $store.tab?.url || "",
    to: "",
  }).toString();

  window.open(`https://t.me/share/url?${params}`);
};

// Image
const img = "/img/telegram.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
