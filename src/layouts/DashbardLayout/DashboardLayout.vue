<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeader.vue";
import SidebarNavigation from "@/layouts/DashbardLayout/components/SidebarNavigation/SidebarNavigation.vue";
import CommonNavigationSideBlock from "@/common/components/CommonNavigationSideBlock/CommonNavigationSideBlock.vue";
import HotProfilesList from "@/modules/ideas-feed/components/HotProfilesList/HotProfilesList.vue";
import { SIDEBAR_NAVIGATION_LINKS } from "@/common/constants/sidebarNavigationLinks";
</script>

<template>
  <DashboardHeader />
  <main class="dashboard">
    <div class="dashboard__left">
      <CommonNavigationSideBlock
        heading="Основные"
        :links="SIDEBAR_NAVIGATION_LINKS"
      />
    </div>
    <div class="dashboard__content">
      <RouterView />
    </div>
    <div class="dashboard__right">
      <HotProfilesList />
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  margin-top: 70px;
  min-height: 90vh;
  padding-right: 35px;
  display: flex;
}

.dashboard__left {
  margin-top: 20px;
  min-width: 295px;
  margin-right: 20px;
}

.dashboard__right {
  margin-top: 20px;
  min-width: 295px;
  margin-right: 20px;
}

.dashboard__content {
  padding-top: 20px;
}
</style>
