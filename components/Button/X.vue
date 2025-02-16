<script lang="ts" setup>
// Label
const label = {
	ja: "Xに投稿",
	en: "Post to X",
	"zh-CN": "分享到X",
	es: "Compartir en X",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		text: $store.tab?.title || "",
		url: $store.tab?.url || "",
	}).toString();

	window.open(`https://x.com/intent/post?${params}`);
};

// Image
const img = "/img/x.svg";
</script>

<template>
  <VButton :img :label @click="run()" darkLogo />
</template>
