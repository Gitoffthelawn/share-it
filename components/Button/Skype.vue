<script lang="ts" setup>
// Label
const label = {
	ja: "Skypeで共有",
	en: "Share on Skype",
	"zh-cn": "分享到Skype",
	es: "Compartir en Skype",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		text: $store.tab?.title || "",
		url: $store.tab?.url || "",
	}).toString();

	window.open(`https://web.skype.com/share?${params}`);
};

// Image
const img = "/img/skype.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
