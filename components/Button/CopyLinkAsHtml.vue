<script lang="ts" setup>
// Label
const label = {
  ja: "HTML形式でリンクをコピー",
  en: "Copy link as HTML",
  "zh-CN": "复制HTML格式链接",
  es: "Copiar enlace como HTML"
};

// Action
import $store from "@/entrypoints/popup/store";
import notify from '@/lib/notifiy';

const run = () => {
  navigator.clipboard.writeText(
    `<a href="${$store.tab?.url}" target="_blank">${$store.tab?.title}</a>`
  );
  notify();
};

// Image
const img = "/img/html.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
