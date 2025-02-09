<template>
	<VButton img="/img/amazon.svg" @click="copy()" :class="{ hide: !isAmazon && !$store.editing }">
		{{ $store.isEn ? 'Copy shorten Amazon link' : 'Amazonの短縮URLをコピー' }}
	</VButton>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $store from "@/entrypoints/popup/store";

const domain = ref('');
const isAmazon = ref(false);

onMounted(() => {
	domain.value = new URL($store.tab.url).hostname;
	isAmazon.value = domain.value.match(/amazon/);
});

const copy = () => {
	const ID = $store.tab.url
		.substr($store.tab.url.search(/(\/product\/|\/dp\/)/))
		.split('/')[2]
		.substr(0, 10);

	navigator.clipboard.writeText(`https://${domain.value}/dp/${ID}`);

	browser.notifications.create({
		type: "basic",
		title: "Share-it",
		message: store.state.isEn ? "Copied." : "コピーしました",
		silent: true,
		iconUrl: "/icon/128.png"
	}, () => { window.close() });
};
</script>

<style scoped>
.hide {
	display: none;
}
</style>
