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
  margin-top: 50px;
  min-height: 90vh;
  padding-right: 35px;
  display: flex;
}

.dashboard__left {
  min-width: 295px;
  margin-right: 20px;
}

.dashboard__content {
  padding-top: 20px;
}
</style>
