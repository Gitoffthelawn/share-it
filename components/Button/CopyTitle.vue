<template>
  <VButton img="/img/copy.svg" @click="copy()">
    {{ $store.state.isEn ? 'Copy title' : 'タイトルをコピー' }}
  </VButton>
</template>

<script>
export default {
  name: 'CopyTitle',
  methods: {
    copy() {
      navigator.clipboard.writeText(this.$store.state.tab.title);

      browser.notifications.create({
        type: "basic",
        title: "Share it",
        message: this.$store.state.isEn ? "Copied." : "コピーしました",
        silent: true,
        iconUrl: "/icon/128.png"
      }, () => { window.close() });
    }
  }
}
</script>
