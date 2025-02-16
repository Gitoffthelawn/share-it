<script lang="ts" setup>
// Label
const label = {
	ja: "Redditに投稿",
	en: "Submit to Reddit",
	"zh-CN": "分享到Reddit",
	es: "Compartir en Reddit",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		title: $store.tab?.title || "",
		url: $store.tab?.url || "",
	}).toString();

	window.open(`https://reddit.com/submit?${params}`);
};

// Image
const img = "/img/reddit.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
