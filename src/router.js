import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/app",
      name: "service",
      component: () => import("./views/Service.vue")
    },
    {
      path: "/wind",
      name: "wind",
      component: () => import("./views/Wind.vue")
    }
  ]
});
