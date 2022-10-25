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
