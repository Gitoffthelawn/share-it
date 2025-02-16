<script lang="ts" setup>
// Label
const label = {
	ja: "Mastodonに投稿",
	en: "Post to Mastodon",
	"zh-CN": "分享到Mastodon",
	es: "Publicar en Mastodon",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		text: `${$store.tab?.title} ${$store.tab?.url}`,
	}).toString();

	window.open(`https://mstdn.jp/share?${params}`);
};

// Image
const img = "/img/mastodon.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
