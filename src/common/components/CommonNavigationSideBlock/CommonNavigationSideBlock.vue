<script setup lang="ts">
import { useAuthenticate } from "@/common/composables/authenticate";

defineProps({
  heading: String,
  links: Array<{ id: number; title: string; iconClass: string; route: string }>,
});

const { auth } = useAuthenticate();

const getDisplayLinkValue = (id: number) => {
  if (auth.authToken) {
    return true;
  } else {
    return [1, 5, 6].find((arrayId) => arrayId === id);
  }
};
</script>

<template>
  <div class="block">
    <h4 class="block__heading">{{ heading }}</h4>
    <RouterLink v-for="link of links" :key="link.id" :to="link.route">
      <div v-if="getDisplayLinkValue(link.id)" class="block__link">
        <i :class="['block__icon', 'bx', link.iconClass]" />
        {{ link.title }}
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.block {
  padding: 10px 15px;
  background: #fff;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  font-weight: 600;
}

.block__heading {
  font-size: 12px;
  padding: 5px 20px;
  text-transform: uppercase;
  color: var(--text-color-grey);
}

.block__link {
  margin-bottom: 3px;
  padding: 12px 20px;
  color: var(--text-color-light);
  border-radius: 10px;
  font-size: 15px;

  display: flex;
  align-items: center;
}

.block__link:hover {
  color: var(--text-color);
  transition: all 0.2s linear;
}

.block__icon {
  margin-right: 20px;
  font-size: 18px;
}

.router-link-active > .block__link {
  background: var(--background-highlighted-color);
  color: var(--primary-color);
}

.router-link-active:hover > .block__link {
  color: var(--primary-color);
}
</style>
