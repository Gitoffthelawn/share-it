<template>
  <VButton img="/img/richtext.svg" @click="copy()">
    {{ $store.state.isEn ? 'Copy link as Rich Text' : 'リッチテキストでリンクをコピー' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const copy = () => {
  const str = `<a href="${store.state.tab.url}">${store.state.tab.title}</a>`;

  const listener = (e) => {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  };

  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);

  browser.notifications.create({
    type: "basic",
    title: "Share it",
    message: store.state.isEn ? "Copied." : "コピーしました",
    silent: true,
    iconUrl: "/icon/128.png"
  }, () => { window.close() });
};
</script>
