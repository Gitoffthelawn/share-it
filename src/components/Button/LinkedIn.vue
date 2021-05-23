<template>
  <VButton
    img="/img/linkedin.svg"
    @click="linkedin()"
  >
    LinkedIn
  </VButton>
</template>

<script>
export default {
  name: 'LinkedIn',
  methods:{
    linkedin() {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${this.$store.state.tab.url}`);
    }
  }
}
</script>
