<script setup lang="ts">
import CommonMenuNavigation from '@/common/components/CommonMenuNavigation/CommonMenuNavigation.vue';
import { FEED_MENU_LINKS } from '@/common/constants/feedMenuLinks';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

const route = useRoute();

const displayAddButton = computed(() => {
  return route.name === 'ideas-feed:new' || route.name === 'ideas-feed:popular';
});
</script>

<template>
  <div class="feed">
    <div class="feed__row">
      <CommonMenuNavigation
        :links="FEED_MENU_LINKS"
        display-router-links
        class="feed__nav"
      />
      <div
        :class="[
          'feed__create-idea',
          { 'feed__create-idea_visible': displayAddButton },
        ]"
      >
        <i class="bx bx-plus feed__create-icon" />
        Create
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.feed__row {
  width: 100%;
  display: flex;
}

.feed__nav {
  width: 100%;
}

.feed__create-idea {
  width: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-highlighted-color);

  border-radius: 10px;
  margin-bottom: 10px;

  cursor: pointer;

  color: var(--primary-color);
  font-weight: 600;
  transition: all 0.2s linear;
}

.feed__create-idea:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.feed__create-idea_visible {
  margin-left: 20px;
  width: 200px;

  transition: all 0.2s linear;
}

.feed__create-icon {
  margin-right: 10px;
}
</style>
