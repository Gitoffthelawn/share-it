<template>
  <VButton img="/img/email.svg" @click="mailto()">
    Email
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const mailto = () => {
  window.open(`mailto:info@sample.com?subject=${store.state.tab.title}&body=${store.state.tab.url}`);
};
</script>
