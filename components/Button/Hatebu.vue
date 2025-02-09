<template>
  <VButton img="/img/hatebu.svg" @click="hatebu()">
    {{ $store.state.isEn ? 'Hatena Bookmark' : 'はてなブックマーク' }}
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const hatebu = () => {
  window.open(`https://b.hatena.ne.jp/entry/${store.state.tab.url}`);
};
</script>
