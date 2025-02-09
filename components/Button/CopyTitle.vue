<template>
  <VButton img="/img/copy.svg" @click="copy()">
    {{ $store.state.isEn ? 'Copy title' : 'タイトルをコピー' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const copy = () => {
  navigator.clipboard.writeText(store.state.tab.title);

  browser.notifications.create({
    type: "basic",
    title: "Share it",
    message: store.state.isEn ? "Copied." : "コピーしました",
    silent: true,
    iconUrl: "/icon/128.png"
  }, () => { window.close() });
};
</script>
