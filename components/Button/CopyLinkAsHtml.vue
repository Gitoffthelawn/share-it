<template>
  <VButton img="/img/html.svg" @click="copy()">
    {{ $store.state.isEn ? 'Copy link as HTML' : 'HTML形式でリンクをコピー' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const copy = () => {
  navigator.clipboard.writeText(`<a href="${store.state.tab.url}" target="_blank">${store.state.tab.title}</a>`);

  browser.notifications.create({
    type: "basic",
    title: "Share it",
    message: store.state.isEn ? "Copied." : "コピーしました",
    silent: true,
    iconUrl: "/icon/128.png"
  }, () => { window.close() });
};
</script>
