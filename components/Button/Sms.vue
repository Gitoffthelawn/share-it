<script lang="ts" setup>
// Label
const label = {
	ja: "SMSで送信",
	en: "Send via SMS",
	"zh-cn": "通过短信发送",
	es: "Enviar por SMS",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		body: `${$store.tab?.title} ${$store.tab?.url}`,
	}).toString();

	window.open(`sms:?${params}`);
};

// Image
const img = "/img/sms.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
