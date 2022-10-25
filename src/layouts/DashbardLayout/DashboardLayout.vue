<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader.vue";
import SidebarNavigation from "@/layouts/DashbardLayout/components/SidebarNavigation.vue";
import { reactive } from "vue";

const sidebarLinks = reactive([
  {
    iconClass: "bxs-collection",
    title: "Лента",
  },
  {
    iconClass: "bx-search-alt",
    title: "Мои идеи",
  },
  {
    iconClass: "bxs-bookmark",
    title: "Сохраненные",
  },
  {
    iconClass: "bxs-chat",
    title: "Сообщения",
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
  width: 300px;
}

.dashboard__right {
  width: 400px;
}
</style>
