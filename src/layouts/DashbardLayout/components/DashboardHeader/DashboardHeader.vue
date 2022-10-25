<template>
  <header class="header">
    <div class="header__left">
      <img src="@/assets/icons/logo.svg" />
      <p class="header__name">Ferrum</p>
    </div>
    <div class="header__right">
      <button class="header__button header__button_inbox header__archive">
        <i class="bx bxs-shield-minus"></i>
        <img src="@/assets/icons/archive.svg" class="header__archive_active" />
        <img src="@/assets/icons/archive-hovered.svg" />
      </button>
      <button class="header__button header__button_profile header__profile">
        <img
          src="@/assets/icons/profile-picture.svg"
          class="header__profile_active"
        />
        <img src="@/assets/icons/profile-picture-hovered.svg" />
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
  width: 100vw;
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
  position: relative;
  margin-left: 15px;
  width: 55px;
  height: 55px;
  background: var(--primary-color);
  border: none;
  border-radius: 50%;
  transition-duration: 0.3s;
}

.header__button:hover {
  background: #ffffff;
  cursor: pointer;
}

.header__button__inbox::after {
  position: absolute;
  right: 8px;
  top: 10px;
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--secondary-color);
}

.header__profile .header__archive_active,
.header__profile_active {
  position: absolute;
  opacity: 1;
  transition-duration: 0.3s;
}
.header__profile:hover .header__profile_active {
  opacity: 0;
}
.header__archive:hover .header__archive_active {
  opacity: 0;
}
</style>
