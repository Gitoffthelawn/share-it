<script lang="ts" setup>
// Label
const label = {
	ja: "Raindrop.io に保存",
	en: "Save to Raindrop.io",
	"zh-cn": "保存到 Raindrop.io",
	es: "Guardar en Raindrop.io",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		title: $store.tab?.title || "",
		link: $store.tab?.url || "",
	}).toString();

	window.open(`https://app.raindrop.io/add?${params}`);
};

// Image
const img = "/img/raindrop.svg";
</script>

<template>
	<VButton :img :label @click="run()" />
</template>
