import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "@/components/element-plus";
import { i18nInstall } from "@/components/element-plus/i18n";
import "element-plus/lib/theme-chalk/index.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/index.scss";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Pf from "pf-component/lib/index.umd.js";
import "pf-component/lib/index.css";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(Pf);
i18nInstall(app);
app.mount("#app");
