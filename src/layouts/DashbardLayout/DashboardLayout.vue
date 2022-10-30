<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeader.vue";
import SidebarNavigation from "@/layouts/DashbardLayout/components/SidebarNavigation/SidebarNavigation.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

const route = useRoute();

const onIdeasFeed = computed(() => {
  return route.name === "ideas-feed";
});
</script>

<template>
  <DashboardHeader />
  <main class="dashboard">
    <div class="dashboard__left">
      <SidebarNavigation />
    </div>
    <div class="dashboard__content">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  padding-right: 35px;
  display: flex;
}

.dashboard__left {
  margin-right: 20px;
}

.dashboard__content {
  padding-top: 20px;
  width: 100%;
}
</style>
