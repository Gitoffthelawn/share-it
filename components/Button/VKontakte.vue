<script lang="ts" setup>
// Label
const label = {
  ja: "VKontakteで共有",
  en: "Share on VKontakte",
  "zh-cn": "分享到VKontakte",
  es: "Compartir en VKontakte",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    url: $store.tab?.url || "",
  }).toString();

  window.open(`https://vk.com/share.php?${params}`);
};

// Image
const img = "/img/vkontakte.svg";
</script>

<template>
	<VButton :img :label @click="run()" />
</template>
