<script lang="ts" setup>
// Label
const label = {
	ja: "Snapchatで共有",
	en: "Share on Snapchat",
	"zh-CN": "分享到Snapchat",
	es: "Compartir en Snapchat",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		attachmentUrl: $store.tab?.url || "",
	}).toString();

	window.open(`https://snapchat.com/scan?${params}`);
};

// Image
const img = "/img/snapchat.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
