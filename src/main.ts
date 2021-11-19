import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "@/components/element-plus";
import { i18nInstall } from "@/components/element-plus/i18n";
import "element-plus/lib/theme-chalk/index.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/index.scss";

import PF, { isTrue, useAuth } from "pf-component";
import "pf-component/lib/index.css";

const app = createApp(App);
i18nInstall(app);
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(PF, {
    clientId: "pf-web",
    secret: "123456",
    redirect: "http://localhost:4200/dcms/callback",
    systemUrl: process.env.VUE_APP_SYSTEM_URL,
    gatewayUrl: process.env.VUE_APP_BASE_URL,
    authUrl: process.env.VUE_APP_AUTH_URL,
    systemPrefix: process.env.VUE_APP_API_PREFIX,
    authPrefix: process.env.VUE_APP_API_PREFIX,
    enableProxy: isTrue(process.env.VUE_APP_ENABLE_PROXY),
    enableGateway: isTrue(process.env.VUE_APP_ENABLE_GATEWAY)
  });
app.mount("#app");
