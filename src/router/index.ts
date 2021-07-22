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
      redirect: "/home",
      name: "Home",
      components: () => import("../views/home.vue"),
    },
    {
      path: "/notfound",
      name: "NotFound",
      components: () => import("../views/notFound.vue"),
    },
  ],
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
