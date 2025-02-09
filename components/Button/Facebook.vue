<template>
  <VButton img="/img/facebook.svg" @click="fb()">
    Facebook
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const fb = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${store.state.tab.url}`);
};
</script>
