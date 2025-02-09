<template>
  <VButton img="/img/html.svg" @click="copy()">
    {{ $store.isEn ? 'Copy link as HTML' : 'HTML形式でリンクをコピー' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const copy = () => {
  navigator.clipboard.writeText(`<a href="${$store.tab.url}" target="_blank">${$store.tab.title}</a>`);

  browser.notifications.create({
    type: "basic",
    title: "Share-it",
    message: store.state.isEn ? "Copied." : "コピーしました",
    silent: true,
    iconUrl: "/icon/128.png"
  }, () => { window.close() });
};
</script>
