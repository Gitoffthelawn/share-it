<script lang="ts" setup>
// Label
const label = {
	ja: "Outlookで送信",
	en: "Send via Outlook",
	"zh-cn": "通过Outlook发送",
	es: "Enviar por Outlook",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		subject: $store.tab?.title || "",
		body: $store.tab?.url || "",
	}).toString();

	window.open(`https://outlook.live.com/mail/deeplink/compose?${params}`);
};

// Image
const img = "/img/outlook.png";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
