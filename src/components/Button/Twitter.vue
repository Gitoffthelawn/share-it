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
      window.open(`https://twitter.com/intent/tweet?text=${this.$store.state.tab.title}&url=${this.$store.state.tab.url}`);
    }
  }
}
</script>
