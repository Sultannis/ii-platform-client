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
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <div class="card__left">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__desc">{{ description }}</p>
      <div class="card__bottom">
        <button class="card__button">
          <i class="bx bxs-bookmark" />
        </button>
      </div>
    </div>
    <div class="card__right">
      <img
        src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?s=612x612"
        alt=""
        class="card__user-img"
      />
      <div class="card__votes">
        <button class="card__button card__button_vote">
          <i class="bx bx-chevron-up" />
        </button>
        <div class="card__score">{{ score }}</div>
        <button class="card__button">
          <i class="bx bx-chevron-down card__button_vote"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 20px;
  width: 100%;
  background: #ffffff;

  border-radius: 10px;

  display: flex;
  overflow: hidden;
}

.card:first-child {
  margin-top: 0;
}

.card__bottom {
  margin-top: 15px;
  width: 100%;
}

.card__left {
  padding: 20px;
}

.card__right {
  padding: 20px;
  max-width: 100px;
  background: var(--primary-color);

  color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card__votes {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.card__score {
  margin: 8px 0;
}

.card__button {
  font-size: 22px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  color: var(--dark-grey-color);
}

.card__button_vote {
  color: #ffffff;
}

.card__title {
  font-size: 20px;
}

.card__desc {
  margin-top: 10px;
  font-size: 13px;
}

.card__user-img {
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 50%;
}
</style>
