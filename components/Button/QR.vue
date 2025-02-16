<script lang="ts" setup>
// Label
const label = {
	ja: "QRコードを表示",
	en: "Show QR code",
	"zh-cn": "显示QR码",
	es: "Mostrar código QR",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
	const params = new URLSearchParams({
		data: $store.tab?.url || "",
		format: "svg",
	}).toString();

	window.open(`https://api.qrserver.com/v1/create-qr-code/?${params}`);
};

// Image
const img = "/img/qr.svg";

// Tooltip
const tooltip = {
	ja: "このサイトを開くQRコードを表示、保存できます",
	en: "You can show and save a QR code to open this site",
	"zh-cn": "您可以显示和保存一个QR码以打开此站点",
	es: "Puede mostrar y guardar un código QR para abrir este sitio",
};
</script>

<template>
  <VButton :label @click="run()" :img :tooltip />
</template>
