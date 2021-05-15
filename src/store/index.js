import { createStore } from "vuex";

export default createStore({
  state: {
    isEn: true,
    tab: {},
    options: {
      enableButtons: [
        "Twitter",
        "Twitter",
        "CopyTitle",
        "CopyTitle",
      ],
      disableButtons: [
        "Twitter",
      ],
    }
  },
  mutations: {
    setIsEn(state, boolean) {
      state.isEn = boolean;
    },
    setTabInfo(state, tab) {
      state.tab = { ...tab };
    },
    setOptions(state, options) {
      state.options = { ...options };
    },
  },
  actions: {},
  modules: {}
});
