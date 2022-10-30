<script setup lang="ts">
import { ref } from "vue";

const dotVisible = ref(false);
</script>

<template>
  <header class="header">
    <div class="header__left">
      <img src="@/assets/icons/logo.svg" class="header__icon" />
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
      <a-popover
        :overlayStyle="{ 'box-shadow': 'none' }"
        placement="bottomRight"
      >
        <template #content>
          <form action="" class="form">
            <input type="text" placeholder="Почта" class="form__input" />
            <input type="text" placeholder="Пароль" class="form__input" />
          </form>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <button class="header__button header__button_profile">
          <i class="bx bxs-user" />
        </button>
      </a-popover>
    </div>
  </header>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
}

.form__input {
  margin-top: 15px;
}

.form__input:first-child {
  margin-top: 0;
}

.header {
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  max-width: 100vw;
  background: var(--primary-color);
}

.header__icon {
  width: 25px;
}

.header__left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header__right {
  display: flex;
  flex-direction: row;
  positon: relative;
}

.header__name {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-left: 15px;
}

.header__button {
  margin-left: 15px;
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50%;
  background: var(--primary-color);

  color: #ffffff;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

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

.ant-popover {
  top: 30px !important;
}

.ant-popover-inner {
  box-shadow: none !important;
  border-radius: 10px !important;
  border: 1px solid var(--border-color);
}
</style>
