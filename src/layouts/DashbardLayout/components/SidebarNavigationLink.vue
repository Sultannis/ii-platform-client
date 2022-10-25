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
    <div class="link__icon-circle">
      <i :class="['link__icon', 'bx', props.imageClass]" />
    </div>
    <slot />
  </RouterLink>
</template>

<style scoped>
.link {
  padding: 20px;
  margin-top: 15px;
  background: #ffffff;
  border-radius: 10px;

  font-weight: 500;
  text-decoration: none;
  color: var(--text-dark-color);

  display: flex;
  align-items: center;
  cursor: pointer;
}

.link__icon-circle {
  margin-right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--light-grey-color);

  display: flex;
  justify-content: center;
  align-items: center;
}

.link__icon {
  color: var(--dark-grey-color);
}

.link:first-child {
  margin-top: 0;
}

.router-link-exact-active {
  background-color: var(--primary-color);
}
</style>
