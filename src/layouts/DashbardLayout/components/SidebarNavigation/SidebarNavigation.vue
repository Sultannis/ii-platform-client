<script setup lang="ts">
import { SIDEBAR_NAVIGATION_LINKS } from "@/common/constants/sidebarNavigationLinks";
import SidebarNavigationLink from "../SidebarNavigationLink/SidebarNavigationLink.vue";

const links = SIDEBAR_NAVIGATION_LINKS;
</script>

<template>
  <aside class="sidebar">
    <SidebarNavigationLink
      v-for="link of links"
      :image-class="link.iconClass"
      :route="link.route"
    >
      {{ link.title }}
    </SidebarNavigationLink>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  min-height: 100%;
  padding-top: 10px;
  max-width: 295px;
  min-width: 295px;
  background-color: var(--background-semi-dark);
}
</style>
