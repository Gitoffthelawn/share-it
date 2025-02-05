<template>
  <VButton img="/img/other.svg" @click="post()">
    {{ $store.state.isEn ? 'Share with OS Extensions' : 'OSの機能でシェア' }}
  </VButton>
</template>

<script>
export default {
  name: 'Other',
  methods: {
    post() {
      if (!navigator.share) {
        alert(this.$store.state.isEn ? "This browser is not supported" : "このブラウザではサポートされていません");
        window.close();
        return;
      }

      const title = this.$store.state.tab.title;
      const url = this.$store.state.tab.url;

      navigator.share({ title, url, });
    }
  }
}
</script>
