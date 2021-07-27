import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/notfound",
      name: "NotFound",
      component: () => import("../views/notFound.vue"),
    },
  ],
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
