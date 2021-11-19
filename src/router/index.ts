import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Constants } from "@/constants/constants";
import { systemRouter } from "@/router/system.router";
import { pageConfigRouter } from "@/router/page-config.router";
import { useAuth } from "pf-component";

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
      ...systemRouter,
      ...pageConfigRouter
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
const { checkToken, authCode } = useAuth();
router.beforeEach((to, from, next) => {
  if (checkToken() && Constants.PERMITALL.findIndex(path => to.path === path) === -1) {
    authCode();
  } else {
    next();
  }
});
export default router;
