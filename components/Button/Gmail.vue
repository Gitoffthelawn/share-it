<script lang="ts" setup>
// Label
const label = {
  ja: "Gmailで送信",
  en: "Send via Gmail",
  "zh-cn": "通过Gmail发送",
  es: "Enviar por Gmail",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    su: $store.tab?.title || "",
    body: $store.tab?.url || "",
    fs: "1",
    tf: "1",
    view: "cm",
  }).toString();

  window.open(`https://gmail.google.com/gmail?${params}`);
};

// Image
const img = "/img/gmail.svg";
</script>

<template>
	<VButton :label @click="run()" :img />
</template>
