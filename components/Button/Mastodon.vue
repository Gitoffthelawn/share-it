<template>
  <VButton img="/img/mastodon.svg" @click="post()">
    Mastodon
  </VButton>
</template>

<script>
export default {
  name: 'Mastodon',
  methods: {
    post() {
      window.open(`https://mstdn.jp/share?text=${this.$store.state.tab.title}%20${this.$store.state.tab.url}`);
    }
  }
}
</script>
