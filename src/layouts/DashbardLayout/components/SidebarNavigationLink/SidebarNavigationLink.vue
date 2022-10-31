<script setup lang="ts">
const props = defineProps({
  imageClass: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink class="link" :to="route">
    <i :class="['link__icon', 'bx', props.imageClass]" />
    <slot />
  </RouterLink>
</template>

<style scoped>
.link {
  margin-top: 10px;
  height: 40px;
  width: 100%;
  padding-left: 35px;

  display: flex;
  align-items: center;
}

.link:hover {
  background: var(--background-light);
}

.link__icon {
  margin-right: 10px;
  color: var(--dark-grey-color);
  font-weight: 30px;
}

.router-link-exact-active {
  color: var(--blue-highlight);
  transition: all 0.2s linear;
}
</style>
