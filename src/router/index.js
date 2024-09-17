import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Auth/LoginForm.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/DashboardView.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.token) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/UserManagement.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.token) {
        next("/login");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
