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
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${this.$store.state.tab.url}&title=${this.$store.state.tab.title}`);
    }
  }
}
</script>
