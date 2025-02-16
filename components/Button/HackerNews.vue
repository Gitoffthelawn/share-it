<script lang="ts" setup>
// Label
const label = {
	ja: "Hacker Newsに投稿",
	en: "Post to Hacker News",
	"zh-CN": "分享到Hacker News",
	es: "Compartir en Hacker News",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		t: $store.tab?.title || "",
		u: $store.tab?.url || "",
	}).toString();

	window.open(`https://news.ycombinator.com/submitlink?${params}`);
};

// Image
const img = "/img/hackernews.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
