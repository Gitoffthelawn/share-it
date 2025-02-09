<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import ButtonList from "@/components/ButtonList.vue";

const store = useStore();
const title = ref("");
const url = ref("");
const favIconUrl = ref("");

const getCurrentTab = async () => {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await browser.tabs.query(queryOptions);
  return tab;
};

const handleKeyNavigation = (e) => {
  if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;

  const focusableButtons = Array.from(
    document.querySelectorAll("button, a")
  ).filter(el => {
    const style = getComputedStyle(el);
    return style.display !== "none" && style.visibility !== "hidden";
  });

  if (!focusableButtons.includes(document.activeElement) && e.key === "ArrowDown") {
    e.preventDefault();
    focusableButtons[0].focus();
    return;
  }

  const currentIndex = focusableButtons.indexOf(document.activeElement);
  if (currentIndex === -1) return;

  e.preventDefault();

  const nextIndex =
    e.key === "ArrowDown"
      ? (currentIndex + 1) % focusableButtons.length
      : (currentIndex - 1 + focusableButtons.length) % focusableButtons.length;

  focusableButtons[nextIndex].focus();
};

onMounted(() => {
  if (process.env.NODE_ENV === "production") {
    if (browser.i18n.getUILanguage().includes("ja")) {
      store.commit("setIsEn", false);
    }

    getCurrentTab().then((tab) => {
      store.commit("setTabInfo", tab);

      title.value = tab.title || "";
      url.value = tab.url || "";
      favIconUrl.value = tab.favIconUrl || "";
    });
  } else {
    // sample for develop
    title.value = "Example site";
    url.value = "https://example.com";
    favIconUrl.value = "https://hira.page/img/meta/favicon.svg";
  }

  // 上下キーでフォーカスを移動
  document.addEventListener("keydown", handleKeyNavigation);
});
</script>

<template>
  <header v-if="favIconUrl || title || url">
    <img v-if="favIconUrl" :src="favIconUrl" alt="favicon">
    <h1 v-if="title && favIconUrl">{{ title }}</h1>
    <h1 v-else-if="title" class="solo">{{ title }}</h1>
    <p v-if="url">{{ url }}</p>
  </header>

  <ButtonList />
</template>

<style scoped>
header {
  padding: 20px 24px 16px;
  border-bottom: 1px solid rgb(var(--color-main) / 0.1);

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
    color: rgb(var(--color-main) / 0.5);
    font-size: 12px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
