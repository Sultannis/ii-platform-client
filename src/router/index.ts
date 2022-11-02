import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout.vue";
import FeedLayout from "@/layouts/FeedLayout/FeedLayout.vue";
import EditProfileLayout from "@/layouts/EditProfileLayout/EditProfileLayout.vue";
import IdeasFeedView from "@/modules/feed/ideas-feed/IdeasFeedView.vue";
import UserIdeasView from "@/modules/user-ideas/UserIdeasView.vue";
import SavedIdeasView from "@/modules/saved-ideas/SavedIdeasView.vue";
import UserChatsView from "@/modules/user-chats/UserChatsView.vue";
import SettingsView from "@/modules/settings/SettingsView.vue";
import SupportView from "@/modules/support/SupportView.vue";
import PeopleFeedView from "@/modules/feed/people-feed/PeopleFeedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardLayout,
      children: [
        {
          path: "/feed",
          name: "ideas-feed",
          component: FeedLayout,
          redirect: { name: "ideas-feed:new" },
          children: [
            {
              path: "new",
              name: "ideas-feed:new",
              component: IdeasFeedView,
            },
            {
              path: "popular",
              name: "ideas-feed:popular",
              component: IdeasFeedView,
            },
            {
              path: "people",
              name: "ideas-feed:people",
              component: PeopleFeedView,
            },
          ],
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
        {
          path: "/support",
          name: "support",
          component: SupportView,
        },
        {
          path: "/settings",
          name: "settings",
          component: SettingsView,
        },
      ],
    },
    {
      path: "/user-edit",
      component: EditProfileLayout,
    },
  ],
});

export default router;
