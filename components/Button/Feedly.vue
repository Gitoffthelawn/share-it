<template>
  <VButton img="/img/feedly.svg" @click="feedly()">
    {{ $store.state.isEn ? 'Search RSS on Feedly' : 'FeedlyでRSSを探す' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const feedly = () => {
  window.open(`https://feedly.com/i/discover/sources/search/feed/${store.state.tab.url}`);
};
</script>
