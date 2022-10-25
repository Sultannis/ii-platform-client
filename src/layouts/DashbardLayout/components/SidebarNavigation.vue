<script setup lang="ts">
import SidebarNavigationLink from "./SidebarNavigationLink.vue";

const props = defineProps({
  links: {
    type: Array<{ iconClass: string; title: string }>,
    default: [],
  },
});
</script>

<template>
  <SidebarNavigationLink v-for="link of links" :image-class="link.iconClass">
    {{ link.title }}
  </SidebarNavigationLink>
</template>
