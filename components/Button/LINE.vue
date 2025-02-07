<template>
  <VButton
    img="/img/line.svg"
    @click="line()"
  >
    LINE
  </VButton>
</template>

<script>
export default {
  name: 'LINE',
  methods:{
    line() {
      window.open(`https://line.me/R/msg/text/?${this.$store.state.tab.title}%0D%0A${this.$store.state.tab.url}`);
    }
  }
}
</script>
