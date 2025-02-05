<template>
  <VButton img="/img/threads.svg" @click="post()">
    Threads
  </VButton>
</template>

<script>
export default {
  name: 'Threads',
  methods: {
    post() {
      window.open(`https://threads.net/intent/post?text=${this.$store.state.tab.title}%20${this.$store.state.tab.url}`);
    }
  }
}
</script>
