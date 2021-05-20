<template>
  <VButton
    img="/img/richtext.svg"
    @click="copy()"
  >
    {{ $store.state.isEn ? 'Copy link as Rich Text' : 'リッチテキストでリンクをコピー' }}
  </VButton>
</template>

<script>
export default {
  name: 'CopyLinkAsRichText',
  methods:{
    copy() {
      const str=`<a href="${this.$store.state.tab.url}">${this.$store.state.tab.title}</a>`;

      const listener = (e) => {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
      }

      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);

      this.copyNotification(this.$store.state.isEn);

    }
  }
}
</script>
