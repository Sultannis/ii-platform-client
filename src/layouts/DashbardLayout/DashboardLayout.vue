<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeader.vue";
import CommonNavigationSideBlock from "@/common/components/CommonNavigationSideBlock/CommonNavigationSideBlock.vue";
import HotProfilesList from "@/modules/ideas-feed/components/HotProfilesList/HotProfilesList.vue";
import { SIDEBAR_NAVIGATION_LINKS } from "@/common/constants/sidebarNavigationLinks";
import { SIDEBAR_ACCOUNT_LINKS } from "@/common/constants/sidebarAccountLinks";
</script>

<template>
  <main class="dashboard">
    <DashboardHeader />
    <div class="dashboard__fixed">
      <div class="dashboard__left">
        <CommonNavigationSideBlock
          heading="Основные"
          :links="SIDEBAR_NAVIGATION_LINKS"
        />
        <CommonNavigationSideBlock
          heading="Аккаунт"
          :links="SIDEBAR_ACCOUNT_LINKS"
        />
      </div>
      <div class="dashboard__right">
        <HotProfilesList />
      </div>
    </div>
    <div class="dashboard__center">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  padding-top: 85px;
  min-height: calc(100vh - 85px);

  display: flex;
  flex-direction: column;
}

.dashboard__center {
  margin: 0 auto;
  width: calc(95% - 640px);
  max-width: 1020px;
}

.dashboard__left {
  margin-bottom: 20px;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dashboard__right {
  min-width: 300px;
}

.dashboard__fixed {
  height: calc(100vh - 90px);
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  width: 95%;
  max-width: 1668px;

  display: flex;
  justify-content: space-between;
}
</style>
