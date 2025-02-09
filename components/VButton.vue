<script setup>
import $store from "@/entrypoints/popup/store";

defineProps({
  img: String
});
</script>

<template>
  <button :disabled="$store.editing ? 'disabled' : false" :class="{ edit: $store.editing }">
    <img :src="img" alt="icon">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  width: 100%;
  height: 40px;
  border: none;
  color: rgb(var(--color-main) / .9);
  text-align: left;

  img {
    vertical-align: text-bottom;
    width: 16px;
    height: 16px;
  }

  &.edit {
    pointer-events: none;

    img {
      margin-left: 24px;
    }
  }
}
</style>
