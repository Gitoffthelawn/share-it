<script lang="ts" setup>
// Label
const label = {
	ja: "WhatsAppで共有",
	en: "Share on WhatsApp",
	"zh-cn": "分享到WhatsApp",
	es: "Compartir en WhatsApp",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		text: $store.tab?.url || "",
	}).toString();

	window.open(`https://web.whatsapp.com/send?${params}`);
};

// Image
const img = "/img/whatsapp.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
