import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router/index";
import { setDerective } from "./directive/index";

const app = createApp(App);
setupRouter(app);
setDerective(app);

app.mount("#app");
