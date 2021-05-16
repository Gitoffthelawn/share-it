<template>
  <VButton
    img="/img/note.svg"
    @click="note()"
  >
    note
  </VButton>
</template>

<script>
export default {
  name: 'Note',
  methods:{
    note() {
      window.open(`https://note.com/intent/post?url=${this.$store.state.tab.url}`);
    }
  }
}
</script>
