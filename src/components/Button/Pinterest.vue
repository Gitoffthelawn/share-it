<template>
  <VButton
    img="/img/pinterest.svg"
    @click="pin()"
  >
    Pinterest
  </VButton>
</template>

<script>
export default {
  name: 'Pinterest',
  methods:{
    pin() {
      window.open(`https://pinterest.com/pin/create/button/?url=${this.$store.state.tab.url}&description=${this.$store.state.tab.title}`);
    }
  }
}
</script>
