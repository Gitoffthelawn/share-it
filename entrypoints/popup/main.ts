import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import VButton from "@/components/VButton.vue";

const app = createApp(App);

app.component("VButton", VButton);
app.mount("#app");
