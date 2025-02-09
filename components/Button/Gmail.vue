<template>
  <VButton img="/img/gmail.svg" @click="mailto()">
    Gmail
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const mailto = () => {
  window.open(`https://gmail.google.com/gmail?fs=1&tf=1&view=cm&su=${store.state.tab.title}&body=${store.state.tab.url}`);
};
</script>
