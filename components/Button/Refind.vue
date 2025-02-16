<script lang="ts" setup>
// Label
const label = {
  ja: "Refindに保存",
  en: "Save to Refind",
  "zh-CN": "保存到Refind",
  es: "Guardar en Refind",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    url: $store.tab?.url || "",
  }).toString();

  window.open(`https://refind.com?${params}`);
};

// Image
const img = "/img/refind.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
