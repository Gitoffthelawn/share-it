<template>
  <button>
    <!-- <img src="/img/drag.svg" alt="drag"> -->
    <img :src="img" alt="icon">
    <slot></slot>
    <!-- <input type="checkbox" name="" id=""> -->
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
  height: 42px;
  margin-top: 4px;
  border: none;
  background: none;
  color: color(main,.9);
  text-align: left;

  img {
    vertical-align: text-bottom;
    width: 16px;
    height: 16px;
  }
 }
</style>
