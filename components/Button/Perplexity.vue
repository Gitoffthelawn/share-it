<script lang="ts" setup>
// Label
const label = {
	ja: "Perplexityにページを送信",
	en: "Send page to Perplexity",
	"zh-cn": "将页面发送到Perplexity",
	es: "Enviar página a Perplexity",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		q: `${$store.tab?.title} ${$store.tab?.url}`,
	}).toString();

	window.open(`https://perplexity.ai/search/new?${params}`);
};

// Image
const img = "/img/perplexity.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
