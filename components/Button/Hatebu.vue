<template>
  <VButton img="/img/hatebu.svg" @click="hatebu()">
    {{ $store.isEn ? 'Hatena Bookmark' : 'はてなブックマーク' }}
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const hatebu = () => {
  window.open(`https://b.hatena.ne.jp/entry/${$store.tab.url}`);
};
</script>
