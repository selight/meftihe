import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/components/Login.vue";
import * as firebase from "firebase";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/problem",
    name: "Problem",
    component: () => import("../views/problem.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sol",
    name: "Solution",
    component: () => import("../views/solution.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
//
// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//
//   if (requiresAuth && !currentUser) next("/");
//   else if (!requiresAuth && currentUser) next("home");
//   else next();
// });
export default router;
