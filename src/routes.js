import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Test from "./views/test";
import About from "./views/about";
import Error from "./views/404";

const routerHistory = createWebHashHistory();

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Test,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: Error,
    },
  ],
});

export default routers;
