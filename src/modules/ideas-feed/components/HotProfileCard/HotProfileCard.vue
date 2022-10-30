<template>
  <div class="card">
    <div class="card__row">
      <div class="card__left">
        <img
          src="@/assets/images/profile-photo.jpg"
          alt=""
          class="card__image"
        />
        <a class="card__name">ist.sultan</a>
      </div>
      <div class="card__button">
        <i class="bx bx-user-plus" />
      </div>
    </div>
    <div class="card__text">
      Гипер разраб, гора мышц и просто отморозок. Работает в ЦРУ на парттайме
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 15px;
  border-bottom: 1px solid var(--border-color);
}

.card__row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__image {
  width: 45px;
  height: 45px;
  margin-right: 10px;

  border-radius: 50%;
}

.card__name {
  color: #ffffff;
  text-decoration: underline;
  font-size: 18px;
}

.card__name:hover {
  color: var(--blue-highlight);
}

.card__button {
  font-size: 25px;
  cursor: pointer;
}

.card__text {
  margin-top: 5px;
  font-size: 13px;
}
</style>
