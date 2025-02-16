<script lang="ts" setup>
// Label
const label = {
  ja: "Wayback Machineで確認",
  en: "Check in Wayback Machine",
  "zh-CN": "在Wayback Machine中查看",
  es: "Ver en Wayback Machine"
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  window.open(`https://web.archive.org/web/*/${$store.tab?.url}`);
};

// Image
const img = "/img/waybackmachine.svg";

// Tooltip
const tooltip = {
  ja: "Internet Archive の Wayback Machine このページの過去キャッシュを確認します",
  en: "Check this page's past cache in the Internet Archive's Wayback Machine",
  "zh-CN": "在互联网档案馆的Wayback Machine中查看此页面的过去缓存",
  es: "Ver la caché pasada de esta página en la Wayback Machine de Internet Archive"
};
</script>

<template>
  <VButton :label @click="run()" :img :tooltip darkLogo />
</template>
