<script setup lang="ts">
import CommonMenuNavigation from "@/common/components/CommonMenuNavigation/CommonMenuNavigation.vue";
import { FEED_MENU_LINKS } from "@/common/constants/feedMenuLinks";
</script>

<template>
  <div class="feed">
    <CommonMenuNavigation :links="FEED_MENU_LINKS" />
    <RouterView />
  </div>
</template>
