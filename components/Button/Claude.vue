<script lang="ts" setup>
// Label
const label = {
	ja: "Claudeにページを送信",
	en: "Send page to Claude",
	"zh-cn": "将页面发送到Claude",
	es: "Enviar página a Claude",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		q: `${$store.tab?.title} ${$store.tab?.url}`,
	}).toString();

	window.open(`https://claude.ai/new?${params}`);
};

// Image
const img = "/img/claude.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
