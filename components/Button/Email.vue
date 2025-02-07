<template>
  <VButton img="/img/email.svg" @click="mailto()">
    Email
  </VButton>
</template>

<script>
export default {
  name: 'Email',
  methods: {
    mailto() {
      window.open(`mailto:info@sample.com?subject=${this.$store.state.tab.title}&body=${this.$store.state.tab.url}`);
    }
  }
}
</script>
