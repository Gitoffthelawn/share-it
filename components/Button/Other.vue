<script lang="ts" setup>
// Label
const label = {
	ja: "OSの機能でシェア",
	en: "Share with OS Extensions Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"zh-CN": "使用系统分享",
	es: "Compartir con extensiones del OS",
};

// Action
import { ref, onMounted } from "vue";
import $store from "@/entrypoints/popup/store";

const isSupported = ref(false);

onMounted(() => {
	if (!navigator.share) return;
	isSupported.value = true;
});

const run = () => {
	if (!navigator.share) {
		alert("Error: This feature is not supported on your browser.");
		window.close();
		return;
	}

	const title = $store.tab?.title;
	const url = $store.tab?.url;

	navigator.share({ title, url });
};

// Image
const img = "/img/other.svg";

// Tooltip
const tooltip = {
	ja: "OSのネイティブ共有機能を呼び出します。サポートされている場合のみ表示されます。",
	en: "Calls the OS's native share feature. Only shown if supported.",
	"zh-CN": "调用操作系统的原生共享功能。仅在支持时显示。",
	es: "Llama a la función de compartir nativa del SO. Solo se muestra si es compatible.",
};
</script>

<template>
  <VButton :label @click="run()" :img :tooltip :class="{ hide: !isSupported && !$store.editing }" />
</template>

<style scoped>
.hide {
  display: none;
}
</style>
