<script lang="ts" setup>
// Label
const label = {
	ja: "Tumblrに投稿",
	en: "Post to Tumblr",
	"zh-cn": "分享到Tumblr",
	es: "Publicar en Tumblr",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		canonicalUrl: $store.tab?.url || "",
		title: $store.tab?.title || "",
	}).toString();

	window.open(`https://www.tumblr.com/widgets/share/tool?${params}`);
};

// Image
const img = "/img/tumblr.svg";
</script>

<template>
  <VButton :label @click="run()" :img darkLogo />
</template>
