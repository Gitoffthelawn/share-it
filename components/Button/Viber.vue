<script lang="ts" setup>
// Label
const label = {
  ja: "Viberで送信",
  en: "Send with Viber",
  "zh-cn": "使用Viber发送",
  es: "Enviar con Viber",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = async () => {
  const params = new URLSearchParams({
    text: `${$store.tab?.title} ${$store.tab?.url}`,
  }).toString();

  window.open(`viber://forward?${params}`);
};

// Image
const img = "/img/viber.svg";

// Tooltip
const tooltip = {
  ja: "Viberアプリで送信します。viber.comからアプリのダウンロードが必要です。",
  en: "Send with Viber app. Download the app from viber.com.",
  "zh-cn": "使用Viber应用程序发送。请从viber.com下载应用程序。",
  es: "Enviar con la aplicación Viber. Descargue la aplicación desde viber.com.",
};
</script>

<template>
	<VButton :label @click="run()" :img :tooltip />
</template>
