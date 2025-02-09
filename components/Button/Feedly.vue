<template>
  <VButton img="/img/feedly.svg" @click="feedly()">
    {{ $store.isEn ? 'Search RSS on Feedly' : 'FeedlyでRSSを探す' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const feedly = () => {
  window.open(`https://feedly.com/i/discover/sources/search/feed/${$store.tab.url}`);
};
</script>
