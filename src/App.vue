<template>

  <header v-if="favIconUrl || title || url">
    <img v-if="favIconUrl" :src="favIconUrl" alt="favicon">
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="url">{{ url }}</p>
  </header>

  <ButtonList />

</template>

<script>
import ButtonList from './components/ButtonList.vue'

export default {
  name: 'App',
  components: {
    ButtonList
  },
  data() {
    return {
      title: "",
      url: "",
      favIconUrl: "",
    }
  },
  methods: {
    async getCurrentTab() {
      let queryOptions = { active: true, currentWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      return tab;
    }
  },
  created() {
    if (process.env.NODE_ENV == "production") {
      if( chrome.i18n.getUILanguage().includes("ja") ) {
        this.$store.commit("setIsEn", false);
      }

      this.getCurrentTab().then(tab => {
        this.$store.commit("setTabInfo", tab);

        this.title = tab.title || "";
        this.url = tab.url || "";
        this.favIconUrl = tab.favIconUrl || "";
      });
    } else {
      this.title = "【Mac効率化】きっとまだ知らない、Alfredのオススメ設定・使い方 | WEBA";
      this.url = "https://hira.page/blog/alfred-technique";
      this.favIconUrl = "https://hira.page/img/favicon.png";
    }
  }
}
</script>

<style scoped lang="scss">
@use "index.scss" as *;

</style>
