<template>
  <VButton
    img="/img/pocket.svg"
    @click="save()"
  >
    Pocket
  </VButton>
</template>

<script>
export default {
  name: 'Pocket',
  methods:{
    save() {
      window.open(`https://getpocket.com/save?url=${this.$store.state.tab.url}`);
    }
  }
}
</script>
