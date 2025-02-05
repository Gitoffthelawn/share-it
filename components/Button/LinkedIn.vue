<template>
  <VButton img="/img/linkedin.svg" @click="linkedin()">
    LinkedIn
  </VButton>
</template>

<script>
export default {
  name: 'LinkedIn',
  methods: {
    linkedin() {
      // window.open(`https://linkedin.com/sharing/share-offsite/?url=${this.$store.state.tab.url}`);
      window.open(`https://linkedin.com/feed/?shareActive=true&text=${this.$store.state.tab.title}%20${this.$store.state.tab.url}`);
    }
  }
}
</script>
