<script lang="ts" setup>
// Label
const label = {
	ja: "LinkedInに投稿",
	en: "Share on LinkedIn",
	"zh-CN": "分享到LinkedIn",
	es: "Compartir en LinkedIn",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		shareActive: "true",
		text: `${$store.tab?.title} ${$store.tab?.url}`,
	}).toString();

	window.open(`https://linkedin.com/feed/?${params}`);
};

// Image
const img = "/img/linkedin.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
