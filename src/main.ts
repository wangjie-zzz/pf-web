import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "@/components/element-plus";
// import { i18nInstall } from "@/components/element-plus/i18n";
import "element-plus/lib/theme-chalk/index.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/index.scss";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Pf from "pf-component"; // TODO 页面刷新会清空字典
import "pf-component/lib/index.css";

const app = createApp(App);
// i18nInstall(app);
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(Pf);
app.mount("#app");
