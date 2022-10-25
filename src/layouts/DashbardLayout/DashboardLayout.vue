<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader.vue";
import SidebarNavigation from "@/layouts/DashbardLayout/components/SidebarNavigation.vue";
import { reactive } from "vue";

const sidebarLinks = reactive([
  {
    iconClass: "bxs-collection",
    title: "Лента",
    route: "/",
  },
  {
    iconClass: "bx-search-alt",
    title: "Мои идеи",
    route: "/user-ideas",
  },
  {
    iconClass: "bxs-bookmark",
    title: "Сохраненные",
    route: "/saved",
  },
  {
    iconClass: "bxs-chat",
    title: "Сообщения",
    route: "/chats",
  },
]);
</script>

<template>
  <dashboard-header />
  <main class="dashboard">
    <div class="dashboard__left">
      <SidebarNavigation :links="sidebarLinks" />
    </div>
    <RouterView />
    <div class="dashboard__right"></div>
  </main>
</template>

<style scoped>
.dashboard {
  padding-top: 20px;
  width: 90%;
  margin: auto;
  display: flex;
}

.dashboard__left {
  min-width: 300px;
  margin-right: 20px;
}

.dashboard__right {
  width: 400px;
  margin-left: 20px;
}
</style>
