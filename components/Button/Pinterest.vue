<script lang="ts" setup>
// Label
const label = {
  ja: "Pinterestに保存",
  en: "Save to Pinterest",
  "zh-CN": "保存到Pinterest",
  es: "Guardar en Pinterest"
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {

  const params = new URLSearchParams({
    description: $store.tab?.title || "",
    url: $store.tab?.url || "",
  }).toString();

  window.open(`https://pinterest.com/pin/create/button/?${params}`);
};

// Image
const img = "/img/pinterest.svg";
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
