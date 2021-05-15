<template>
  <VButton
    img="http://www.google.com/s2/favicons?domain=twitter.com"
    @click="tweet()"
  >
    Twitter
  </VButton>
</template>

<script>
export default {
  name: 'Twitter',
  methods:{
    tweet() {
      window.open(`https://twitter.com/intent/tweet?url=${this.$store.state.tab.url}&text=${this.$store.state.tab.title}`, '_blank');
    }
  }
}
</script>
