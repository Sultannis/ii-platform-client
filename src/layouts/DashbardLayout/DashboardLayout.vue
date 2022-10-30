<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeader.vue";
import SidebarNavigation from "@/layouts/DashbardLayout/components/SidebarNavigation/SidebarNavigation.vue";
import NewsModal from "@/layouts/DashbardLayout/components/news-list/NewsModal/NewsModal.vue";
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
    <div class="dashboard__middle">
      <RouterView />
    </div>
    <div class="dashboard__right" v-show="onIdeasFeed"></div>
    <NewsModal />
  </main>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  padding-right: 35px;
  display: flex;
}

.dashboard__middle {
  padding-top: 20px;
  margin: 0 20px;
  width: 100%;
}

.dashboard__right {
  padding-top: 20px;
  min-width: 295px;
  max-width: 295px;
}
</style>
