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
  <div class="idea">
    <div class="idea__row idea__row_space-between">
      <div class="idea__heading">{{ title }}</div>
      <i class="bx bx-dots-horizontal-rounded idea__options"></i>
    </div>

    <div class="idea__row">
      <div class="idea__author">
        <img
          src="@/assets/images/profile-photo.jpg"
          alt=""
          class="idea__author-image"
        />
        <div class="idea__author-name">its.sultan</div>
        <div class="idea__author-divider" />
      </div>
      <div class="idea__time">2 мин</div>
    </div>
    <div class="idea__content">
      <p class="idea__description">{{ description }}</p>
      <div class="idea__tags"></div>
      <div class="idea__info">
        <div class="idea__fin-support">Необходимое финансирование 5.3м ₽</div>
        <div class="idea__date">Опубликовано 22/10/22</div>
      </div>
    </div>
    <footer class="idea__footer">
      <div class="idea__author"></div>
      <div class="idea__activations"></div>
    </footer>
  </div>
</template>

<style scoped>
.idea {
  margin-bottom: 10px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
}

.idea__heading {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color);
}

.idea__options {
  color: var(--text-color-light);
  cursor: pointer;
  transition: color 0.2s linear;
}

.idea__options:hover {
  color: var(--text-color);
  transition: color 0.2s linear;
}

.idea__row {
  display: flex;
  align-items: center;
}

.idea__row_space-between {
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 25px;
}

.idea__author {
  padding-right: 10px;
  display: flex;
  align-items: center;
}

.idea__author-image {
  margin-right: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.idea__author-divider {
  margin-left: 10px;
  height: 25px;
  width: 1.5px;
  background-color: var(--text-color-grey);
}

.idea__author-name {
  font-weight: 600;
  cursor: pointer;
}

.idea__author-name:hover {
  text-decoration: underline;
}

.idea__time {
  color: var(--text-color-grey);
}
</style>
