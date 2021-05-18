<template>
  <button
    :disabled="$store.state.editMode ? 'disabled' : false"
    :class="{ edit: $store.state.editMode }"
  >
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
  height: 40px;
  border: none;
  background: none;
  color: color(main,.9);
  text-align: left;

  img {
    vertical-align: text-bottom;
    width: 16px;
    height: 16px;
    transition: .1s ease-out;

  }
  &.edit {
    pointer-events: none;
    img {
      margin-left: 24px;
    }
  }
 }
</style>
