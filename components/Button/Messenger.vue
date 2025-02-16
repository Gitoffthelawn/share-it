<script lang="ts" setup>
// Label
const label = {
	ja: "Messengerで送信",
	en: "Send with Messenger",
	"zh-CN": "使用Messenger发送",
	es: "Enviar con Messenger",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		app_id: "1140274417695873",
		link: $store.tab?.url || "",
		redirect_uri: "https://messenger.com/",
	}).toString();

	window.open(`https://www.facebook.com/dialog/send?${params}`);
};

// Image
const img = "/img/messenger.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
