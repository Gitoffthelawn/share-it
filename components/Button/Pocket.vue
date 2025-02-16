<script lang="ts" setup>
// Label
const label = {
	ja: "Pocketに保存",
	en: "Save to Pocket",
	"zh-cn": "保存到Pocket",
	es: "Guardar en Pocket",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		url: $store.tab?.url || "",
	}).toString();

	window.open(`https://getpocket.com/save?${params}`);
};

// Image
const img = "/img/pocket.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
