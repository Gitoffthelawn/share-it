import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import mixin from "./mixin";

import VButton from "./components/VButton.vue";
import './index.scss'

const app = createApp(App);

app.use(store);
app.mixin(mixin);
app.component("VButton", VButton);
app.mount("#app");
