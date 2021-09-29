import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Constants } from "@/constants/constants";
import { systemRouter } from "@/router/system.router";
import { MethodTypeEnum } from "@/constants/enum/method-type.enum";
import { clientService } from "@/services/client-service";
import { authApi } from "@/constants/api/auth-api";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: Constants.HOME_PAGE
  },
  {
    path: "/main",
    name: "Main",
    component: () => import(/* webpackChunkName: "Main" */ "@/views/Main.vue"),
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import(/* webpackChunkName: "Main" */ "@/views/test/Test.vue")
      },
      {
        path: "workbench",
        name: "Workbench",
        component: () => import(/* webpackChunkName: "Main" */ "@/views/Workbench.vue")
      },
      ...systemRouter
    ]
  },
  {
    path: "/callback",
    name: "Callback",
    component: () => import(/* webpackChunkName: "Main" */ "@/views/callback/Callback.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import(/* webpackChunkName: "Main" */ "@/views/404/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});
router.beforeEach((to, from, next) => {
  if (!sessionStorage.getItem(Constants.TOKEN) && Constants.PERMITALL.findIndex(path => to.path === path) === -1) {
    const href = clientService.urlQueryConvert(authApi.oauthApi.authorize.url, Constants.AUTHORIZE_CODE_PARAMS);
    location.href = href;
  } else {
    next();
  }
});
export default router;
