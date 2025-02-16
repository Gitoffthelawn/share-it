<script lang="ts" setup>
// Label
const label = {
	ja: "Wappalyzer で分析",
	en: "Analyze with Wappalyzer",
	"zh-cn": "使用 Wappalyzer 分析",
	es: "Analizar con Wappalyzer",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const url = new URL($store.tab?.url || "");
	const query = url.host + url.pathname;

	window.open(`https://wappalyzer.com/lookup/${encodeURIComponent(query)}`);
};

// Image
const img = "/img/wappalyzer.svg";

// Tooltip
const tooltip = {
	ja: "Wappalyzerでこのページを構築している技術スタックを分析します",
	en: "Analyze the technology stack that builds this page with Wappalyzer",
	"zh-cn": "使用 Wappalyzer 分析构建此页面的技术栈",
	es: "Analiza la pila de tecnología que construye esta página con Wappalyzer",
};
</script>

<template>
  <VButton :label @click="run()" :img :tooltip />
</template>
