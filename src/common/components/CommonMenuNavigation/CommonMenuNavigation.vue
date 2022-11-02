<script setup lang="ts">
defineProps({
  links: Array<{ title: string; iconClass: string; route: string }>,
});
</script>

<template>
  <nav class="menu">
    <RouterLink :to="link.route" v-for="link of links" class="menu__item">
      <div class="menu__inner">
        <i :class="['bx', 'menu__icon', link.iconClass]" />
        {{ link.title }}
      </div>
      <div class="menu__indicator" />
    </RouterLink>
  </nav>
</template>

<style>
.menu {
  margin-bottom: 10px;
  height: 55px;
  padding: 0 20px;
  background: #fff;
  display: flex;

  border-radius: 10px;
}

.menu__item {
  margin-right: 10px;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: var(--text-color-light);
}

.menu__item:hover {
  color: var(--text-color);
  transition: color 0.2s linear;
}

.menu__inner {
  padding: 0 10px;
  height: 100%;

  display: flex;
  align-items: center;
}

.menu__icon {
  margin-right: 5px;
}

.menu__indicator {
  opacity: 0;
  width: 100%;
  height: 2px;
  border-radius: 10px 10px 0 0;
  background: var(--primary-color);
  transition: opacity 0.2s linear;
}

.router-link-active > .menu__inner {
  color: var(--primary-color);
}

.router-link-active > .menu__indicator {
  opacity: 1;
  transition: opacity 0.2s linear;
}
</style>
