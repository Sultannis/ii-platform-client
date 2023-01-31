<script setup lang="ts">
import { useAuthenticate } from "@/common/composables/authenticate";
import { useRouter } from "vue-router";
import HeaderSearchInput from "@/layouts/DashboardLayout/components/HeaderSearchInput/HeaderSearchInput.vue";
import { openUserModal } from "@/common/composables/userModalState";

const router = useRouter();
const { auth, logout } = useAuthenticate();
const handleProfileClick = () => {
  if (auth.authToken) {
  } else {
    router.push({
      path: "/auth/login",
    });
  }
};
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
        <a-popover
          v-if="auth.authToken"
          placement="bottomRight"
          class="header__popover popover"
        >
          <template #title>
            <span class="popover__title">Sultan Mustafin</span>
          </template>
          <template #content>
            <div class="popover__link" @click="openUserModal">
              <i class="bx bx-user popover__link-icon" />My profile
            </div>
            <div class="popover__link" @click="logout">
              <i class="bx bx-exit popover__link-icon" /> Log out
            </div>
          </template>
          <button
            v-if="auth.authToken"
            class="header__button header__button_profile"
          >
            <i class="bx bx-user" />
          </button>
        </a-popover>
        <button
          v-else
          auth.authToken
          class="header__button header__button_profile"
          @click="handleProfileClick"
        >
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
  background: var(--primary-color);
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

.popover__title {
  font-weight: 600;
}

.popover__link {
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 5px;

  display: flex;
  align-items: center;
}

.popover__link-icon {
  margin-right: 5px;
}

.popover__link:hover {
  background: var(--background-highlighted-color);
  color: var(--primary-color);
}
</style>
