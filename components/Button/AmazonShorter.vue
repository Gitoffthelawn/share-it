<template>
	<VButton img="/img/amazon.svg" @click="copy()" :class="{ hide: !isAmazon && !$store.state.editMode }">
		{{ $store.state.isEn ? 'Copy shorten Amazon link' : 'Amazonの短縮URLをコピー' }}
	</VButton>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const domain = ref('');
const isAmazon = ref(false);

const copy = () => {
	const ID = store.state.tab.url
		.substr(store.state.tab.url.search(/(\/product\/|\/dp\/)/))
		.split('/')[2]
		.substr(0, 10);

	navigator.clipboard.writeText(`https://${domain.value}/dp/${ID}`);

	browser.notifications.create({
		type: "basic",
		title: "Share it",
		message: store.state.isEn ? "Copied." : "コピーしました",
		silent: true,
		iconUrl: "/icon/128.png"
	}, () => { window.close() });
};

onMounted(() => {
	domain.value = new URL(store.state.tab.url).hostname;
	isAmazon.value = domain.value.match(/amazon/);
});
</script>

<style scoped>
.hide {
	display: none;
}
</style>
