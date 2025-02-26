<script lang="ts" setup>
// Label
const label = {
  ja: "Grokにページを送信",
  en: "Send page to Grok",
  "zh-cn": "将页面发送到Grok",
  es: "Enviar página a Grok",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    text: `${$store.tab?.title} ${$store.tab?.url}`,
  }).toString();

  window.open(`https://x.com/i/grok?${params}`);
};

// Image
const img = "/img/grok.svg";
</script>

<template>
	<VButton :label @click="run()" :img darkLogo />
</template>
