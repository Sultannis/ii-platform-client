<script setup lang="ts">
import { ref } from "vue";

const dotVisible = ref(false);
</script>

<template>
  <header class="header">
    <div class="header__left">
      <img src="@/assets/icons/logo.svg" />
      <p class="header__name">Ferrum</p>
    </div>
    <div class="header__right">
      <button
        :class="[
          'header__button',
          'header__button_inbox',
          {
            'header__button_inbox-full': dotVisible,
          },
        ]"
      >
        <i class="bx bxs-inbox" />
      </button>
      <button class="header__button header__button_profile">
        <i class="bx bxs-user" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 100vw;
  background: var(--primary-color);
}
.header__left {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
  justify-content: space-between;
}
.header__name {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-left: 15px;
}
.header__right {
  display: flex;
  flex-direction: row;
  margin-right: 30px;
}

.header__button {
  margin-left: 15px;
  width: 55px;
  height: 55px;

  border: none;
  border-radius: 50%;
  background: var(--primary-color);

  color: #ffffff;
  font-size: 25px;

  position: relative;
  transition-duration: 0.3s;
}

.header__button:hover {
  background: #ffffff;
  color: var(--primary-color);
  cursor: pointer;
}

.header__button_inbox-full::after {
  width: 6px;
  height: 6px;

  background: var(--secondary-color);
  border-radius: 50%;

  position: absolute;
  right: 8px;
  top: 10px;
  content: "";
  display: inline-block;
}
</style>
