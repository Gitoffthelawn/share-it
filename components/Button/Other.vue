<script setup>
// Label
const label = {
  ja: "OSの機能でシェア",
  en: "Share with OS Extensions",
  "zh-CN": "使用系统分享",
  es: "Compartir con extensiones del SO"
};

const alertMessage = {
  ja: "このブラウザではサポートされていません",
  en: "This browser is not supported",
  "zh-CN": "此浏览器不支持",
  es: "Este navegador no es compatible"
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  if (!navigator.share) {
    alert(alertMessage[$store.locale]);
    window.close();
    return;
  }

  const title = $store.tab.title;
  const url = $store.tab.url;

  navigator.share({ title, url });
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
