<template>
  <VButton img="/img/other.svg" @click="post()">
    {{ $store.isEn ? 'Share with OS Extensions' : 'OSの機能でシェア' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const post = () => {
  if (!navigator.share) {
    alert(store.state.isEn ? "This browser is not supported" : "このブラウザではサポートされていません");
    window.close();
    return;
  }

  const title = $store.tab.title;
  const url = $store.tab.url;

  navigator.share({ title, url });
};
</script>
