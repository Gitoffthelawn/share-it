<script lang="ts" setup>
// Label
const label = {
	ja: "Microsoft Copilotにページを送信",
	en: "Send page to Microsoft Copilot",
	"zh-cn": "将页面发送到Microsoft Copilot",
	es: "Enviar página a Microsoft Copilot",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		showconv: "1",
		sendquery: "0",
		q: `${$store.tab?.title} ${$store.tab?.url}`,
	}).toString();

	window.open(`https://bing.com/search?${params}`);
};

// Image
const img = "/img/copilot.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
