<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeader.vue";
import SidebarNavigation from "@/layouts/DashbardLayout/components/SidebarNavigation/SidebarNavigation.vue";
import NewsList from "@/layouts/DashbardLayout/components/news-list/NewsList/NewsList.vue";
import NewsModal from "@/layouts/DashbardLayout/components/news-list/NewsModal/NewsModal.vue";
import { newsModalVisible } from "./components/news-list/composables/newsModalState";
</script>

<template>
  <DashboardHeader />
  <main :class="['dashboard', { 'dashboard-newsmodal': newsModalVisible }]">
    <div class="dashboard__left">
      <SidebarNavigation />
    </div>
    <div class="dashboard__middle">
      <RouterView />
    </div>
    <div class="dashboard__right">
      <NewsList />
    </div>
    <NewsModal />
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

.dashboard__middle {
  width: 100%;
}

.dashboard__right {
  min-width: 340px;
  margin-left: 20px;
}
</style>
