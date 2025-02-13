<script setup>
// Label
const label = {
  ja: "リッチテキストでリンクをコピー",
  en: "Copy link as Rich Text",
  "zh-CN": "复制富文本格式链接",
  es: "Copiar enlace como texto enriquecido"
};

// Action
import $store from "@/entrypoints/popup/store";
import notify from '@/lib/notifiy';

const run = () => {
  const str = `<a href="${$store.tab.url}">${$store.tab.title}</a>`;

  const listener = (e) => {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  };

  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);

  notify();
};

// Image
const img = "/img/richtext.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
