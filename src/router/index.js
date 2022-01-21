import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import CategoryEats from "../views/CategoryEats.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/menu",
    component: Menu,
    children: {},
  },
  { path: "/menu/:category", component: CategoryEats },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
