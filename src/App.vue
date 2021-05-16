<template>

  <header v-if="favIconUrl || title || url">
    <img v-if="favIconUrl" :src="favIconUrl" alt="favicon">
    <h1 v-if="title && favIconUrl">{{ title }}</h1>
    <h1 v-else-if="title" class="solo">{{ title }}</h1>
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
      this.title = "きっとまだ知らない、Alfredのオススメ設定・使い方 | WEBA";
      this.url = "https://hira.page/blog/alfred-technique";
      this.favIconUrl = "https://hira.page/img/favicon.png";
    }
  }
}
</script>

<style scoped lang="scss">
@use "index.scss" as *;

header {
  padding: 20px 24px 16px;
  border-bottom: 1px solid color(main,.1);

  img {
    vertical-align: top;
    width: 24px;
    height: 24px;
  }

  h1 {
    margin-top: -26px;
    line-height: 26px;
    text-indent: 28px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 18px;
    font-weight: 600;
    &.solo {
      margin-top: 4px;
      text-indent: 0;
    }
  }

  p {
    margin-top: 4px;
    color: color(main,.5);
    font-size: 12px;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
