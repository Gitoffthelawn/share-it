<template>
  <VButton img="/img/pocket.svg" @click="save()">
    Pocket
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const save = () => {
  window.open(`https://getpocket.com/save?url=${store.state.tab.url}`);
};
</script>
