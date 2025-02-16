<script lang="ts" setup>
// Label
const label = {
	ja: "メールで送信",
	en: "Send via Email",
	"zh-CN": "通过邮件发送",
	es: "Enviar por correo",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		subject: $store.tab?.title || "",
		body: $store.tab?.url || "",
	}).toString();

	window.open(`mailto:?${params}`);
};

// Image
const img = "/img/email.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
