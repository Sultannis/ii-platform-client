<script setup lang="ts">
defineProps({
  darkTheme: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div :class="['dashboard-header__search', { dark: darkTheme }]">
    <i
      :class="[
        'bx bx-search-alt dashboard-header__search-icon',
        { dark: darkTheme },
      ]"
    />
    <input
      :class="['dashboard-header__search-input', { dark: darkTheme }]"
      type="text"
      placeholder="Найди идею или человека"
    />
  </div>
</template>

<style scoped>
.dashboard-header__search {
  min-width: 400px;
  margin-right: 25px;
  position: relative;
  width: 100%;
}

.dashboard-header__search-icon {
  position: absolute;
  top: 11px;
  left: 18px;
  font-size: 19px;
  color: #262f4c;
}

.dashboard-header__search-icon.dark {
  color: #bbbbbb;
}

.dashboard-header__search-input {
  width: 100%;
  height: 40px;
  padding: 12px 49px;
  font-size: 13px;
  line-height: 16px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 10px;
  font-weight: 500;
  background-color: #88888821;
}

.dashboard-header__search-input.dark {
  background-color: var(--theme-dark-secondary-color);
  color: #fff;
}

.dashboard-header__search-input:focus {
  border-color: var(--theme-light-primary-color);
}

.dashboard-header__search-input.dark:focus {
  border-color: var(--theme-dark-accent-color);
}

.dashboard-header__search-input:focus.dashboard-header__search-icon {
  color: var(--theme-light-primary-color);
}

.dashboard-header__search-input.dark:focus.dashboard-header__search-icon {
  color: var(--theme-dark-accent-color);
}

.dashboard-header__search-input::placeholder {
  color: rgba(38, 47, 76, 0.7);
}

.dashboard-header__search-input.dark::placeholder {
  color: #bbbbbb;
}
</style>
