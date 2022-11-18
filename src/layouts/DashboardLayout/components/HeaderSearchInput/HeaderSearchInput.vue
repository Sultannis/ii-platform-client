<template>
  <div class="search">
    <i class="search__icon bx bx-search-alt" />
    <input
      type="text"
      placeholder="Найди идею или человека..."
      class="search__input"
    />
  </div>
</template>

<style scoped>
.search {
  width: 400px;
  height: 40px;

  display: flex;
  align-items: center;

  border-radius: 5px;
  background: #fff;
}

.search__icon {
  font-size: 20px;
  margin: 0 15px;
}

.search__input {
  margin-right: 15px;
  width: 100%;
  background: #fff;
  outline: none;
  border: none;
}
</style>
