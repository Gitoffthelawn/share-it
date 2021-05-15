<template>
  <VButton
    img="http://www.google.com/s2/favicons?domain=twitter.com"
    @click="copy()"
  >
    {{ $store.state.isEn ? 'Copy title' : 'タイトルをコピー' }}
  </VButton>
</template>

<script>
export default {
  name: 'CopyTitle',
  methods:{
    copy() {
      navigator.clipboard.writeText(this.$store.state.tab.title);
      this.copyNotification($store.state.isEn);
    }
  }
}
</script>
