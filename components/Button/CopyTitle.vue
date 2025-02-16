<script lang="ts" setup>
// Label
const label = {
	ja: "タイトルをコピー",
	en: "Copy title",
	"zh-CN": "复制标题",
	es: "Copiar título",
};

// Action
import $store from "@/entrypoints/popup/store";
import notify from "@/lib/notifiy";

const run = () => {
	navigator.clipboard.writeText($store.tab?.title);
	notify();
};

// Image
const img = "/img/copy.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
