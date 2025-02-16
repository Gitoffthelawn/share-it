<script lang="ts" setup>
// Label
const label = {
	ja: "Blueskyに投稿",
	en: "Post to Bluesky",
	"zh-CN": "分享到Bluesky",
	es: "Publicar en Bluesky",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		text: `${$store.tab?.title} ${$store.tab?.url}`,
	}).toString();

	window.open(`https://bsky.app/intent/compose?${params}`);
};

// Image
const img = "/img/bluesky.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
