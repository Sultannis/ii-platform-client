import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "@/layouts/DashbardLayout/DashboardLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardLayout,
    },
  ],
});

export default router;
