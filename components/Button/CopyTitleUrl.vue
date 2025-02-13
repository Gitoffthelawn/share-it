<script setup>
// Label
const label = {
  ja: "タイトルとURLをコピー",
  en: "Copy title & URL",
  "zh-CN": "复制标题和链接",
  es: "Copiar título y URL"
};

// Action
import $store from "@/entrypoints/popup/store";
import notify from '@/lib/notifiy';

const run = () => {
  navigator.clipboard.writeText(`${$store.tab.title} ${$store.tab.url}`);
  notify();
};

// Image
const img = "/img/copy.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
