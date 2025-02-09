<template>
  <VButton img="/img/copy.svg" @click="copy()">
    {{ $store.isEn ? 'Copy title & URL' : 'タイトルとURLをコピー' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const copy = () => {
  navigator.clipboard.writeText(`${$store.tab.title} ${$store.tab.url}`);

  browser.notifications.create({
    type: "basic",
    title: "Share-it",
    message: store.state.isEn ? "Copied." : "コピーしました",
    silent: true,
    iconUrl: "/icon/128.png"
  }, () => { window.close() });
};
</script>
