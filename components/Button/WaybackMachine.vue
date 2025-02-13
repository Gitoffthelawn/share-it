<script setup>
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
  window.open(`https://web.archive.org/web/*/${$store.tab.url}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img darkLogo />
</template>
