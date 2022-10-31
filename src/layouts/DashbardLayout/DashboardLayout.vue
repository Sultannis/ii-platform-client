<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeader.vue";
import SidebarNavigation from "@/layouts/DashbardLayout/components/SidebarNavigation/SidebarNavigation.vue";
import NewsList from "@/layouts/DashbardLayout/components/NewsList/NewsList.vue";
</script>

<template>
  <DashboardHeader />
  <main class="dashboard">
    <div class="dashboard__left">
      <SidebarNavigation />
    </div>
    <div class="dashboard__middle">
      <RouterView />
    </div>
    <div class="dashboard__right">
      <NewsList />
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  padding: 0 25px;
  display: grid;
  grid-template-columns: 310px 1fr 310px;
  gap: 20px;
}
</style>
