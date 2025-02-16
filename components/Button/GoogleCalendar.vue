<script lang="ts" setup>
// Label
const label = {
  ja: "Googleカレンダーに追加",
  en: "Add to Google Calendar",
  "zh-CN": "添加到Google日历",
  es: "Añadir a Google Calendar",
};

// Action
import $store from "@/entrypoints/popup/store";

const run = () => {
  const params = new URLSearchParams({
    text: $store.tab?.title || "",
    details: $store.tab?.url || "",
  }).toString();

  window.open(`https://calendar.google.com/calendar/r/eventedit?${params}`);
};

// Image
const img = "/img/googlecalendar.svg";
</script>

<template>
  <VButton :img :label @click="run()" />
</template>
