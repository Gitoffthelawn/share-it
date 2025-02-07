<template>
  <VButton
    img="/img/facebook.svg"
    @click="fb()"
  >
    Facebook
  </VButton>
</template>

<script>
export default {
  name: 'Facebook',
  methods:{
    fb() {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.$store.state.tab.url}`);
    }
  }
}
</script>
