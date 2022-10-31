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
      <i :class="['bx', link.iconClass]" />
      {{ link.title }}
    </RouterLink>
  </div>
</template>

<style scoped>
.block {
  padding: 20px;
  background: #fff;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
}

.block__link {
  color: var(--text-color-light);
}

.block__link:hover {
  color: var(--text-color);
  transition: color 0.2s linear;
}
</style>
