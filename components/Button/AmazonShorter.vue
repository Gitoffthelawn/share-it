<script setup>
// Label
const label = {
	ja: "Amazonの短縮URLをコピー",
	en: "Copy shorten Amazon link",
	"zh-CN": "复制Amazon短链接",
	es: "Copiar enlace corto de Amazon"
};

// Action
import { ref, onMounted } from 'vue';
import $store from "@/entrypoints/popup/store";
import notify from '@/lib/notifiy';

const domain = ref('');
const isAmazon = ref(false);

onMounted(() => {
	domain.value = new URL($store.tab.url).hostname;
	isAmazon.value = domain.value.match(/amazon/);
});

const run = () => {
	const ID = $store.tab.url
		.substr($store.tab.url.search(/(\/product\/|\/dp\/)/))
		.split('/')[2]
		.substr(0, 10);

	navigator.clipboard.writeText(`https://${domain.value}/dp/${ID}`);

	notify();
};

// Image
const img = "/img/amazon.svg";
</script>

<template>
	<VButton :label @click="run()" :img :class="{ hide: !isAmazon && !$store.editing }" />
</template>

<style scoped>
.hide {
	display: none;
}
</style>
