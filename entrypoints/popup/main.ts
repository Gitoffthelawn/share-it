import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import "./style.css";
import VButton from "@/components/VButton.vue";

const app = createApp(App);

app.use(store);
app.component("VButton", VButton);
app.mount("#app");
