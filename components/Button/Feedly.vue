<template>
  <VButton img="/img/feedly.svg" @click="linkedin()">
    {{ $store.state.isEn ? 'Search RSS on Feedly' : 'FeedlyでRSSを探す' }}
  </VButton>
</template>

<script>
export default {
  name: 'Feedly',
  methods: {
    linkedin() {
      window.open(`https://feedly.com/i/discover/sources/search/feed/${this.$store.state.tab.url}`);
    }
  }
}
</script>
