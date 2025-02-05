<template>
  <VButton
    img="/img/tumblr.svg"
    @click="post()"
  >
    Tumblr
  </VButton>
</template>

<script>
export default {
	name: "Tumblr",
	methods: {
		post() {
			window.open(
				`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${this.$store.state.tab.url}&title=${this.$store.state.tab.title}`,
			);
		},
	},
};
</script>

<style scoped>
::v-deep(img) {
  @media (prefers-color-scheme: dark) {
    filter: brightness(5000%);
    opacity: .6;
  }
}
</style>
