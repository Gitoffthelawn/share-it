<template>
  <VButton img="/img/html.svg" @click="copy()">
    {{ $store.state.isEn ? 'Copy link as HTML' : 'HTML形式でリンクをコピー' }}
  </VButton>
</template>

<script>
export default {
  name: 'CopyLinkAsHtml',
  methods: {
    copy() {
      navigator.clipboard.writeText(`<a href="${this.$store.state.tab.url}" target="_blank">${this.$store.state.tab.title}</a>`);

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
