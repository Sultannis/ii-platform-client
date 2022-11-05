<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
defineProps({
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
    <p class="idea__description">{{ description }}</p>
    <div class="idea__tags">
      <CommonTag>идея</CommonTag>
      <CommonTag>роботы</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>беш</CommonTag>
      <CommonTag>роботы</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>иновации</CommonTag>
    </div>
    <img src="@/assets/images/idea image.png" alt="" class="idea__image" />
    <footer class="idea__footer">
      <div class="idea__action">
        <i class="bx bx-like idea__action-icon" />
        Лайков
      </div>
      <div class="idea__action">
        <i class="bx bx-comment-detail idea__action-icon" />
        Коментариев
      </div>
      <div class="idea__action">
        <i class="bx bx-bookmark idea__action-icon" />
        Сохранить
      </div>
    </footer>
  </div>
</template>

<style scoped>
.idea {
  margin-bottom: 10px;
  padding: 20px 30px;
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

.idea__description {
  margin-top: 10px;
}

.idea__tags {
  display: flex;
  flex-wrap: wrap;
}

.idea__image {
  margin-top: 10px;
  width: 100%;
}

.idea__footer {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.idea__action {
  margin-right: 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color-light);

  cursor: pointer;
  display: flex;
  align-items: center;
}

.idea__action:hover {
  color: var(--text-color);
}

.idea__action-icon {
  margin-right: 10px;
}
</style>
