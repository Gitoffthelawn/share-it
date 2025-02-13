<script setup>
import $store from "@/entrypoints/popup/store";
import i18n from "@/lib/i18n";

defineProps({
  img: String,
  darkLogo: Boolean,
  label: Object | String,
});
</script>

<template>
  <button :disabled="$store.editing" :class="{ edit: $store.editing }">
    <img :src="img" alt="icon" :class="{ invert: darkLogo }" />
    <span v-if="typeof label === 'string'">{{ label }}</span>
    <span v-else>{{ i18n.t(label) }}</span>
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
