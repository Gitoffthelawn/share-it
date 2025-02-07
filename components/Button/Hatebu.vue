<template>
  <VButton
    img="/img/hatebu.svg"
    @click="linkedin()"
  >
    {{ $store.state.isEn ? 'Hatena Bookmark' : 'はてなブックマーク' }}
  </VButton>
</template>

<script>
export default {
  name: 'Hatebu',
  methods:{
    linkedin() {
      window.open(`https://b.hatena.ne.jp/entry/${this.$store.state.tab.url}`);
    }
  }
}
</script>
