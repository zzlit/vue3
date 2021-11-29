import { createApp } from "vue";
import HelloWorld from "../lib/index.esm";
import App from "./App.vue";

const app = createApp(App);

app.use(HelloWorld);
app.mount("#app");
