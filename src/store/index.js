import { createStore } from "vuex";

export default createStore({
  state: {
    isEn: true,
    tab: {},
    editMode: false,
  },
  mutations: {
    setIsEn(state, boolean) {
      state.isEn = boolean;
    },
    toggleMode(state) {
      state.editMode = !state.editMode;
    },
    setTabInfo(state, tab) {
      state.tab = { ...tab };
    },
  },
  actions: {},
  modules: {}
});
