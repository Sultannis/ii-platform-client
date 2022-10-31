<script setup lang="ts">

const { name, likes, imageUrl } = defineProps({
  name: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <div class="card__left">
      <img src="@/assets/images/profile-photo.jpg" class="card__image" />
    </div>
    <div class="card__name">{{ name }}</div>
    <div class="card__like-number">{{ likes }}</div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 60px;
  margin-bottom: 10px;

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
  cursor: pointer;
}

.card:hover {
  background: #c3c4cd;
  color: var(--text-color);
}

.card__image {
  width: 40px;
  height: 40px;

  margin-right: 10px;
  border-radius: 50%;
}

.card__name {
  font-size: 17px;
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
