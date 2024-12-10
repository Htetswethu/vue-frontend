import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UserProfile from "../pages/UserProfile.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/user/:id", name: "UserProfile", component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
