<script setup>
import $store from "@/entrypoints/popup/store";

defineProps({
  img: String,
  darkLogo: Boolean,
});
</script>

<template>
  <button :disabled="$store.editing" :class="{ edit: $store.editing }">
    <img :src="img" alt="icon" :class="{ invert: darkLogo }" />
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
    aspect-ratio: 1;

    &.invert {
      @media (prefers-color-scheme: dark) {
        filter: invert(1);
      }
    }
  }


  &.edit {
    pointer-events: none;

    img {
      margin-left: 24px;
    }
  }
}
</style>
