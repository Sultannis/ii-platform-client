<script setup lang="ts">
import SidebarNavigationLink from "./SidebarNavigationLink.vue";

const props = defineProps({
  links: {
    type: Array<{ iconClass: string; title: string; route: string }>,
    default: [],
  },
});
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
