<template>
  <VButton img="/img/pinterest.svg" @click="pin()">
    Pinterest
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const pin = () => {
  window.open(`https://pinterest.com/pin/create/button/?url=${store.state.tab.url}&description=${store.state.tab.title}`);
};
</script>
