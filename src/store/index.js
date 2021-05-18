import { createStore } from "vuex";

export default createStore({
  state: {
    isEn: true,
    tab: {},
    editMode: false,
    options: {
      buttons: [
        { componentName:"Twitter",  enable: false },
        { componentName:"Facebook",  enable: true },
        { componentName:"Pocket",  enable: true },
        { componentName:"LINE",  enable: true },
        { componentName:"Pinterest",  enable: true },
        { componentName:"LinkedIn",  enable: true },
        { componentName:"Hatebu",  enable: true },
        { componentName:"Gmail",  enable: true },
        { componentName:"Tumblr",  enable: true },
        { componentName:"Note",  enable: true },
        { componentName:"CopyTitle",  enable: true },
        { componentName:"CopyTitleUrl",  enable: true },
        { componentName:"CopyLinkAsHtml",  enable: true },
        { componentName:"CopyLinkAsMd",  enable: true },
        { componentName:"CopyLinkAsRichText",  enable: true },
        { componentName:"QR",  enable: true },
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
  },
  actions: {},
  modules: {}
});
