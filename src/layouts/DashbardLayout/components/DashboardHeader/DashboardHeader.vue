<script setup lang="ts">
import LogoImage from "@/assets/images/logo.svg";
import LogoImageDark from "@/assets/images/logo-darken.svg";
import DashboardHeaderSearch from "./DashboardHeaderSearch.vue";
import DashboardHeaderNotifications from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeaderNotifications.vue";
import DashboardHeaderUser from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeaderUser.vue";

defineProps({
  darkTheme: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <header :class="['dashboard-header', { dark: darkTheme }]">
    <div class="dashboard-header__wrap">
      <div class="dashboard-header__logo">
        <router-link to="/">
          <img
            :src="darkTheme ? LogoImageDark : LogoImage"
            alt="Notio"
            class="dashboard-header__logo-image"
          />
        </router-link>
      </div>
      <div class="dashboard-header__row">
        <dashboard-header-search :dark-theme="darkTheme" />
        <dashboard-header-notifications />
        <dashboard-header-user />
      </div>
    </div>
  </header>
</template>

<style scoped>
.dashboard-header {
  margin-bottom: 15px;
  padding: 20px 30px;
  background-color: #fff;
}

.dashboard-header.dark {
  background-color: var(--theme-dark-primary-color);
  color: #fff;
}

.dashboard-header__wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard-header__row {
  display: flex;
  align-items: center;
}

.dashboard-header__logo-image {
  object-fit: contain;
  max-width: 124px;
  max-height: 30px;
}
</style>
