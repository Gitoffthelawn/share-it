<template>
  <VButton
    img="/img/gmail.svg"
    @click="mailto()"
  >
    Gmail
  </VButton>
</template>

<script>
export default {
  name: 'Gmail',
  methods:{
    mailto() {
      window.open(`https://gmail.google.com/gmail?fs=1&tf=1&view=cm&su=${this.$store.state.tab.title}&body=${this.$store.state.tab.url}`);
    }
  }
}
</script>
