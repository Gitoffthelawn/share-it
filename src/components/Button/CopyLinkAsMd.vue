<template>
  <VButton
    img="/img/md.svg"
    @click="copy()"
  >
    {{ $store.state.isEn ? 'Copy link as Markdown' : 'Markdown形式でリンクをコピー' }}
  </VButton>
</template>

<script>
export default {
  name: 'CopyLinkAsMd',
  methods:{
    copy() {
      navigator.clipboard.writeText(`[${this.$store.state.tab.title}](${this.$store.state.tab.url})`);
      this.copyNotification(this.$store.state.isEn);
    }
  }
}
</script>

<style scoped lang="scss">
@use "../../index.scss" as *;

::v-deep(img) {
  @media (prefers-color-scheme: dark) {
    filter: brightness(5000%);
    opacity: .6;
  }
}
</style>
