<script setup lang="ts">
import { ref } from "vue";

const dotVisible = ref(false);
</script>

<template>
  <header class="header">
    <div class="header__left">
      <i class="bx bxs-meteor header__icon"></i>
      NOTIO
    </div>
    <div class="header__right">
      <button
        :class="[
          'header__button',
          {
            header__button_full: dotVisible,
          },
        ]"
      >
        <i class="bx bx-bell" />
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
          <i class="bx bx-user" />
        </button>
      </a-popover>
    </div>
  </header>
</template>

<style scoped>
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
  position: fixed;
  z-index: 1;
  top: 0;
  padding: 0 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  min-width: 100vw;
  max-width: 100vw;
  background: var(--background-medium);
  color: #ffffff;
}

.header__icon {
  font-size: 25px;
  margin-right: 5px;
}

.header__left {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
}

.header__right {
  display: flex;
  flex-direction: row;
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
  cursor: pointer;

  color: #ffffff;
  font-size: 18px;
  background: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  transition-duration: 0.3s;
}

.header__button:hover {
  color: var(--text-grey);
}

.header__button_full::after {
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
