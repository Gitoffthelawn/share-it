<script lang="ts" setup>
// Label
const label = {
  ja: "ChatGPTにページを送信",
  en: "Send page to ChatGPT",
  "zh-cn": "将页面发送到ChatGPT",
  es: "Enviar página a ChatGPT",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    q: `${$store.tab?.title} ${$store.tab?.url}`,
  }).toString();

  window.open(`https://chatgpt.com/?${params}`);
};

// Image
const img = "/img/chatgpt.svg";
</script>

<template>
	<VButton :label @click="run()" :img />
</template>
