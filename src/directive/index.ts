import type { App } from "vue";

export function setDerective(app: App) {
  app.directive("focus", {
    mounted(el) {
      el.focus();
    },
  });
}
