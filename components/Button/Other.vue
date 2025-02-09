<template>
  <VButton img="/img/other.svg" @click="post()">
    {{ $store.state.isEn ? 'Share with OS Extensions' : 'OSの機能でシェア' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const post = () => {
  if (!navigator.share) {
    alert(store.state.isEn ? "This browser is not supported" : "このブラウザではサポートされていません");
    window.close();
    return;
  }

  const title = store.state.tab.title;
  const url = store.state.tab.url;

  navigator.share({ title, url });
};
</script>
