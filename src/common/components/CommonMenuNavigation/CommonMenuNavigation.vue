<script setup lang="ts">
import { onMounted, ref } from "vue";

const emit = defineEmits(["click"]);
const { links } = defineProps({
  displayRouterLinks: {
    type: Boolean,
  },
  links: {
    type: Array<{ title: string; iconClass: string; route: string }>,
    reqired: true,
  },
});

onMounted(() => {
  emitClick(links![selectedItemIndex.value]?.title);
});

const selectedItemIndex = ref(0);

const emitClick = (title: string) => {
  emit("click", title);
};

const handleClick = (title: string, index: number) => {
  selectedItemIndex.value = index;
  emitClick(title);
};
</script>

<template>
  <nav class="menu">
    <RouterLink
      v-if="displayRouterLinks"
      :to="link.route"
      v-for="link of links"
      class="menu__item"
    >
      <div class="menu__inner">
        <i :class="['bx', 'menu__icon', link.iconClass]" />
        {{ link.title }}
      </div>
      <div class="menu__indicator" />
    </RouterLink>
    <div
      v-else
      :to="link.route"
      v-for="(link, index) of links"
      class="menu__item"
      @click="handleClick(link.title, index)"
    >
      <div
        :class="[
          'menu__inner',
          {
            menu__inner_active: index === selectedItemIndex,
          },
        ]"
      >
        <i :class="['bx', 'menu__icon', link.iconClass]" />
        {{ link.title }}
      </div>
      <div
        :class="[
          'menu__indicator',
          {
            menu__indicator_active: index == selectedItemIndex,
          },
        ]"
      />
    </div>
  </nav>
</template>

<style>
.menu {
  margin-bottom: 10px;
  min-height: 55px;
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

.menu__inner_active {
  color: var(--primary-color);
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

.menu__indicator_active {
  opacity: 1;
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
