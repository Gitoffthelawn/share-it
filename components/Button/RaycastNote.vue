<script lang="ts" setup>
// Label
const label = {
	ja: "Raycast Notes に保存",
	en: "Save to Raycast Notes",
	"zh-cn": "保存到 Raycast Notes",
	es: "Guardar en Raycast Notes",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = async () => {
	const params = new URLSearchParams({
		fallbackText: `[${$store.tab?.title}](${$store.tab?.url})`,
	}).toString();

	window.open(
		`raycast://extensions/raycast/raycast-notes/create-note?${params}`,
	);
};

// Image
const img = "/img/raycast.svg";

// Tooltip
const tooltip = {
	ja: "Raycastアプリでノートを作成します。raycast.comからアプリのダウンロードが必要です。",
	en: "Create a note in Raycast app. Download the app from raycast.com.",
	"zh-cn": "在 Raycast 应用程序中创建笔记。请从 raycast.com 下载应用程序。",
	es: "Cree una nota en la aplicación Raycast. Descargue la aplicación desde raycast.com.",
};
</script>

<template>
	<VButton :label @click="run()" :img :tooltip />
</template>
