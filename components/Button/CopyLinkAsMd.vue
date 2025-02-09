<template>
  <VButton img="/img/md.svg" @click="copy()">
    {{ $store.state.isEn ? 'Copy link as Markdown' : 'Markdownでリンクをコピー' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const copy = () => {
  navigator.clipboard.writeText(
    `[${store.state.tab.title}](${store.state.tab.url})`,
  );

  browser.notifications.create({
    type: "basic",
    title: "Share it",
    message: store.state.isEn ? "Copied." : "コピーしました",
    silent: true,
    iconUrl: "/icon/128.png"
  }, () => { window.close() });
};
</script>

<style scoped>
::v-deep(img) {
  @media (prefers-color-scheme: dark) {
    filter: brightness(5000%);
    opacity: .6;
  }
}
</style>
