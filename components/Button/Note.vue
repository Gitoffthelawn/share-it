<template>
  <VButton img="/img/note.svg" @click="note()">
    note
  </VButton>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const note = () => {
  window.open(`https://note.com/intent/post?url=${store.state.tab.url}`);
};
</script>
