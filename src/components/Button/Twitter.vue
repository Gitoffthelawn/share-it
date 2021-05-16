<template>
  <VButton
    img="/img/twitter.svg"
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
      window.open(`https://twitter.com/intent/tweet?url=${this.$store.state.tab.url}&text=${this.$store.state.tab.title}`);
    }
  }
}
</script>
