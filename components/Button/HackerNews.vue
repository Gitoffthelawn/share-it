<script setup>
// Label
const label = {
  // ja: "Hacker Newsに投稿",
  ja: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。 またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう",
  en: "Post to Hacker News",
  "zh-CN": "分享到Hacker News",
  es: "Compartir en Hacker News",
};

// Action
import $store from "@/entrypoints/popup/store";

const params = new URLSearchParams({
  t: $store.tab.title,
  u: $store.tab.url,
}).toString();

const run = () => {
  window.open(`https://news.ycombinator.com/submitlink?${params}`);
};

// Image
const thisFileName = new URL(import.meta.url).pathname.split('/').pop();
const img = `/img/${thisFileName.toLowerCase().replace('.vue', '.svg')}`;
</script>

<template>
  <VButton :label @click="run()" :img />
</template>
