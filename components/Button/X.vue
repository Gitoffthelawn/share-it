<template>
  <VButton img="/img/x.svg" @click="post()">
    X
  </VButton>
</template>

<script>
export default {
  name: 'X',
  methods: {
    post() {
      window.open(`https://x.com/intent/post?text=${this.$store.state.tab.title}&url=${this.$store.state.tab.url}`);
    }
  }
}
</script>
