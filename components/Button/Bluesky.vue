<template>
  <VButton img="/img/bluesky.svg" @click="post()">
    Bluesky
  </VButton>
</template>

<script>
export default {
  name: 'Bluesky',
  methods: {
    post() {
      window.open(`https://bsky.app/intent/compose?text=${this.$store.state.tab.title}%20${this.$store.state.tab.url}`);
    }
  }
}
</script>
