<script lang="ts" setup>
// Label
const label = {
	ja: "noteに投稿",
	en: "Post to note",
	"zh-CN": "发布到note",
	es: "Publicar en note",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		url: $store.tab?.url || "",
	}).toString();

	window.open(`https://note.com/intent/post?${params}`);
};

// Image
const img = "/img/note.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
