import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "@/layouts/DashbardLayout/DashboardLayout.vue";
import IdeasFeedView from "@/modules/ideas-feed/IdeasFeedView.vue";
import UserIdeasView from "@/modules/user-ideas/UserIdeasView.vue";
import SavedIdeasView from "@/modules/saved-ideas/SavedIdeasView.vue";
import UserChatsView from "@/modules/user-chats/UserChatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardLayout,
      children: [
        {
          path: "/",
          name: "ideas-feed",
          component: IdeasFeedView,
        },
        {
          path: "/user-ideas",
          name: "user-ideas",
          component: UserIdeasView,
        },
        {
          path: "/saved",
          name: "saved-ideas",
          component: SavedIdeasView,
        },
        {
          path: "/chats",
          name: "chats",
          component: UserChatsView,
        },
      ],
    },
  ],
});

export default router;