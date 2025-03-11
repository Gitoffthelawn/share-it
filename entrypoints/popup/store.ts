import { reactive } from "vue";

export interface Store {
  tab: chrome.tabs.Tab | null;
  editing: boolean;
}

const $store: Store = reactive({
  tab: null,
  editing: false,
});

export default $store;
