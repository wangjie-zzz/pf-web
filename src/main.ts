import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "@/components/element-plus";
import { i18n } from "@/components/element-plus/i18n";
import "element-plus/lib/theme-chalk/index.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/index.scss";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(ElementPlus);
i18n(app);
app.mount("#app");
