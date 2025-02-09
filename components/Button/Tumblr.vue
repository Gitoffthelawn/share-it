<template>
  <VButton img="/img/tumblr.svg" @click="post()">
    Tumblr
  </VButton>
</template>

<script setup>
import $store from "@/entrypoints/popup/store";

const post = () => {
  window.open(
    `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${$store.tab.url}&title=${$store.tab.title}`,
  );
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
