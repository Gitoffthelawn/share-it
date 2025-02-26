<script lang="ts" setup>
// Label
const label = {
  ja: "Trelloに追加",
  en: "Add to Trello",
  "zh-cn": "添加到Trello",
  es: "Añadir a Trello",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    mode: "popup",
    desc: $store.tab?.title || "",
    url: $store.tab?.url || "",
  }).toString();

  window.open(`https://trello.com/add-card?${params}`);
};

// Image
const img = "/img/trello.svg";
</script>

<template>
	<VButton :img :label @click="run()" />
</template>
