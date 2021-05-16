import { createStore } from "vuex";

export default createStore({
  state: {
    isEn: true,
    tab: {},
    editMode: true,
    options: {
      buttons: [
        { component:"Twitter",  enable: true },
        { component:"Facebook",  enable: true },
        { component:"Pocket",  enable: true },
        { component:"LINE",  enable: true },
        { component:"Pinterest",  enable: true },
        { component:"LinkedIn",  enable: true },
        { component:"Hatebu",  enable: true },
        { component:"Gmail",  enable: true },
        { component:"Tumblr",  enable: true },
        { component:"Note",  enable: true },
        { component:"CopyTitle",  enable: true },
        { component:"CopyTitleUrl",  enable: true },
        { component:"CopyLinkAsHtml",  enable: true },
        { component:"CopyLinkAsMd",  enable: true },
        { component:"CopyLinkAsRichText",  enable: true },
        { component:"QR",  enable: true },
      ],
    }
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
    setOptions(state, options) {
      state.options = { ...options };
    },
  },
  actions: {},
  modules: {}
});
