<script setup lang="ts">
</script>

<template>
  <div class="card">
    <div class="card__left">
      <img src="@/assets/images/profile-photo.jpg" class="card__image">
    </div>
    <div class="card__name">
      <p>its.sultan</p>
    </div>
    <div class="card__like-number">
      <p>342</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  color: var(--text-color-light);

  border-radius: 10px;
  border-bottom: 1px solid var(--border-color);
  padding-left: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;  
  position: relative;

  transition-duration: 0.2s;
}

.card:hover {
  background: #C3C4CD;
  color: #000000;
}

.card__image {
  width: 45px;
  height: 45px;
  margin-right: 10px;

  border-radius: 50%;
}

.card__name {
  font-size: 18px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__name:hover {
  color: var(--blue-highlight);
}

.card__like-number {
  font-size: 14px;
  font-weight: 600;

  position: absolute;
  right: 16px;
}

</style>
