<template>
  <VButton
    img="/img/html.svg"
    @click="copy()"
  >
    {{ $store.state.isEn ? 'Copy link as HTML' : 'HTML形式でリンクをコピー' }}
  </VButton>
</template>

<script>
export default {
  name: 'CopyLinkAsHtml',
  methods:{
    copy() {
      navigator.clipboard.writeText(`<a href="${this.$store.state.tab.url}" target="_blank" rel="noopener">${this.$store.state.tab.title}</a>`);
      this.copyNotification(this.$store.state.isEn);
    }
  }
}
</script>
