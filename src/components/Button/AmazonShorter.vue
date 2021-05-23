<template>
  <VButton
    img="/img/amazon.svg"
    @click="copy()"
    :class="{hide: !isAmazon && !$store.state.editMode }"
  >
    {{ $store.state.isEn ? 'Copy shorten Amazon link' : 'Amazonの短縮URLをコピー' }}
  </VButton>
</template>

<script>
export default {
  name: 'AmazonShorter',
  data() {
    return {
      domain: '',
      isAmazon: false,
    }
  },
  methods:{
    copy() {
      const ID = this.$store.state.tab.url.substr(this.$store.state.tab.url.search(/(\/product\/|\/dp\/)/)).split('/')[2].substr(0, 10);

      navigator.clipboard.writeText(`https://${this.domain}/dp/${ID}`);
      this.copyNotification(this.$store.state.isEn);
    }
  },
  mounted() {
    this.domain = new URL(this.$store.state.tab.url).hostname;
    this.isAmazon = this.domain.match(/amazon/);
  }
}
</script>



<style scoped lang="scss">
@use "../../index.scss" as *;

.hide {
  display: none;
}
</style>
