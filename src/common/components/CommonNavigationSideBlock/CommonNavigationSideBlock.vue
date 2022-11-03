<script setup lang="ts">
defineProps({
  heading: String,
  links: Array<{ title: string; iconClass: string; route }>,
});
</script>

<template>
  <div class="block">
    <h4 class="block__heading">{{ heading }}</h4>
    <RouterLink v-for="link of links" :to="link.route" class="block__link">
      <i :class="['block__icon', 'bx', link.iconClass]" />
      {{ link.title }}
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

.router-link-active {
  background: var(--background-highlighted-color);
  color: var(--primary-color);
}

.router-link-active:hover {
  color: var(--primary-color);
}
</style>
