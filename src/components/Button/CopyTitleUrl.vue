<template>
  <VButton
    img="/img/copy.svg"
    @click="copy()"
  >
    {{ $store.state.isEn ? 'Copy title & URL' : 'タイトルとURLをコピー' }}
  </VButton>
</template>

<script>
export default {
  name: 'CopyTitleUrl',
  methods:{
    copy() {
      navigator.clipboard.writeText(this.$store.state.tab.title + ' ' + this.$store.state.tab.url);
      this.copyNotification(this.$store.state.isEn);
    }
  }
}
</script>
