<script lang="ts" setup>
// Label
const label = {
	ja: "FeedlyでRSSを探す",
	en: "Search RSS on Feedly",
	"zh-CN": "在Feedly中搜索RSS",
	es: "Buscar RSS en Feedly",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	window.open(
		`https://feedly.com/i/discover/sources/search/feed/${$store.tab?.url}`,
	);
};

// Image
const img = "/img/feedly.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
