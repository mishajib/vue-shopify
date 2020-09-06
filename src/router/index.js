import Vue from "vue";
import vueRouter from "vue-router";
import Shop from "../views/Shop.vue";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import VueRouter from "vue-router";

Vue.use(vueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/shop",
    component: Shop,
    meta: {
      title: "Shop",
    },
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home";

  next();
});

export default router;
