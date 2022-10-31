<script setup lang="ts">
const { title, description, score, imageUrl } = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="card">
    <img src="@/assets/images/idea image.png" alt="" class="card__image" />
    <div class="card__heading">{{ title }}</div>
    <div class="card__content">
      <p class="card__description">{{ description }}</p>
      <div class="card__tags"></div>
      <div class="card__info">
        <div class="card__fin-support">Необходимое финансирование 5.3м ₽</div>
        <div class="card__date">Опубликовано 22/10/22</div>
      </div>
    </div>
    <footer class="card__footer">
      <div class="card__author"></div>
      <div class="card__activations"></div>
    </footer>
  </div>
</template>

<style scoped>
.card {
  margin-top: 10px;
  background: transparent;
  max-width: 100%;

  border: 1px solid var(--border-color);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card__heading {
  padding: 10px 15px;
  background: var(--background-light);

  font-size: 20px;
  font-weight: 600;
  color: var(--blue-highlight);
}

.card__content {
  padding: 15px;
}

.card__description {
  color: var(--text-grey);
}

.card__info {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: var(--text-grey);
}

.card__image {
  max-width: 100%;
}

.card:first-child {
  margin-top: 0;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
}
</style>
