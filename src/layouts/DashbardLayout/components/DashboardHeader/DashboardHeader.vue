<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/icons/logo.svg" alt="">
      <p class="header__name">Ferrum</p>
    </div>
    <div class="header__profile">
      <button class="header__button">
        <img src="@/assets/icons/archive.svg" alt="">
      </button>
      <button class="header__button">
        <img src="@/assets/icons/profile-picture.svg" alt="">
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
.header__logo{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 40px;
  justify-content: space-between;
}
.header__name {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0 15px;
}
.header__profile {
  display: flex;
  flex-direction: row;
  margin: 0 40px 0 0;
}
.header__button {
  background-color: var(--primary-color);
  border: none;
  margin: 0 15px 0 15px;
}
</style>
