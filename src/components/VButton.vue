<template>
  <button>
    <img :src="img" alt="icon">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    img: String
  },
}
</script>

<style scoped lang="scss">
@use "../index.scss" as *;

button {
  width: 100%;
 }
</style>
