<script setup lang="ts">
import HeaderSearchInput from "@/layouts/DashboardLayout/components/HeaderSearchInput/HeaderSearchInput.vue";
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__left">
        <i class="bx bxs-meteor header__icon"></i>
        NOTIO
      </div>
      <div class="header__right">
        <HeaderSearchInput />
        <button class="header__button">
          <i class="bx bx-bell" />
        </button>
        <button class="header__button header__button_profile">
          <i class="bx bx-user" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100vw;
  position: fixed;
  z-index: 4;
  top: 0;
  height: 70px;
  background: #fff;
}

.header__inner {
  margin: auto;
  height: 100%;
  width: 95%;
  max-width: 1668px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__icon {
  font-size: 25px;
  margin-right: 15px;
  margin-left: 30px;
}

.header__left {
  color: var(--primary-color);
  font-size: 22px;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__right {
  display: flex;
  align-items: center;
}

.header__name {
  font-size: 18px;
  font-weight: 700;
}

.header__button {
  margin-left: 15px;
  width: 30px;
  height: 30px;

  border: none;
  cursor: pointer;

  font-size: 20px;
  background: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  transition-duration: 0.3s;
}

.header__button_profile {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: #fff;
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
</style>
