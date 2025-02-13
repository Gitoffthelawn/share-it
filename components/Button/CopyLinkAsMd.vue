<template>
  <VButton img="/img/md.svg" @click="copy()" darkLogo>
    {{ $store.isEn ? 'Copy link as Markdown' : 'Markdownでリンクをコピー' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const copy = () => {
  navigator.clipboard.writeText(
    `[${$store.tab.title}](${$store.tab.url})`,
  );

  browser.notifications.create({
    type: "basic",
    title: "Share-it",
    message: store.state.isEn ? "Copied." : "コピーしました",
    silent: true,
    iconUrl: "/icon/128.png"
  }, () => { window.close() });
};
</script>
