<script lang="ts" setup>
// Label
const label = {
  ja: "Google翻訳で開く",
  en: "Open with Google Translate",
  "zh-cn": "使用Google翻译打开",
  es: "Abrir con Google Translate",
};

// Action
import $store from "@/entrypoints/popup/store";
import i18n from "@/lib/i18n";

const run = () => {
  const userLang =
    new Intl.Locale(navigator.language).language || i18n.default_locale;

  const params = new URLSearchParams({
    sl: "auto",
    hl: userLang,
    u: $store.tab?.url || "",
  }).toString();

  window.open(`https://translate.google.com/translate?${params}`);
};

// Image
const img = "/img/googletranslate.svg";

// Tooltip
const tooltip = {
  ja: "翻訳されたURLを取得できます。ブラウザのシステム言語に翻訳されます。",
  en: "Get the translated URL. Translated to the browser's system language.",
  "zh-cn": "获取翻译后的URL。翻译为浏览器的系统语言。",
  es: "Obtenga la URL traducida. Traducido al idioma del sistema del navegador.",
};
</script>

<template>
	<VButton :label @click="run()" :img :tooltip />
</template>
