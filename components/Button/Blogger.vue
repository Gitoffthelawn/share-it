<script lang="ts" setup>
// Label
const label = {
	ja: "Bloggerに投稿",
	en: "Post to Blogger",
	"zh-cn": "分享到Blogger",
	es: "Publicar en Blogger",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		n: $store.tab?.title || "",
		u: $store.tab?.url || "",
	}).toString();

	window.open(`https://www.blogger.com/blog-this.g?${params}`);
};

// Image
const img = "/img/blogger.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
