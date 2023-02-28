<script setup lang="ts">
import CommonTag from '@/common/components/CommonTag/CommonTag.vue';
import defaultAvatar from '@/assets/images/default-avatar.png';
import { useFetchPerson } from '@/common/composables/fetchPerson';
import { onMounted, ref } from 'vue';

onMounted(() => {
  if (!localAvatarUrl.value) {
    localAvatarUrl.value = defaultAvatar;
  }
});

const emit = defineEmits(['click']);

const emitClick = () => {
  emit('click');
};

const props = defineProps({
  authorId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

const { person, fetchPerson } = useFetchPerson();
const localAuthorId = ref(props.authorId);
const localAvatarUrl = ref(person.value.avatarUrl);

const handleImageLoadingError = () => {
  localAvatarUrl.value = defaultAvatar;
};

fetchPerson(localAuthorId.value);
</script>

<template>
  <div class="idea">
    <div class="idea__row idea__row_space-between">
      <div class="idea__heading">{{ title }}</div>
      <i class="bx bx-dots-horizontal-rounded idea__options"></i>
    </div>
    <div class="idea__row">
      <div
        class="idea__author"
        @click="emitClick"
      >
        <img
          :src="localAvatarUrl"
          alt=""
          class="idea__author-image"
          @error="handleImageLoadingError"
        />
        <div class="idea__author-name">
          {{ person.nickname }}
        </div>
        <div class="idea__author-divider" />
      </div>
      <div class="idea__time">2 мин</div>
    </div>
    <p class="idea__description">{{ subtitle }}</p>
    <div class="idea__tags">
      <CommonTag>идея</CommonTag>
      <CommonTag>роботы</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>беш</CommonTag>
      <CommonTag>роботы</CommonTag>
      <CommonTag>иновации</CommonTag>
      <CommonTag>иновации</CommonTag>
    </div>
    <img
      src="@/assets/images/idea image.png"
      alt=""
      class="idea__image"
    />
    <footer class="idea__footer">
      <div class="idea__action">
        <i class="bx bx-like idea__action-icon" />
        Likes
      </div>
      <div class="idea__action">
        <i class="bx bx-comment-detail idea__action-icon" />
        Comments
      </div>
      <div class="idea__action">
        <i class="bx bx-bookmark idea__action-icon" />
        Save
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

.idea__author:hover {
  padding-right: 10px;
  display: flex;
  align-items: center;

  text-decoration: underline;
  cursor: pointer;
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
}

.idea__time {
  color: var(--text-color-grey);
}

.idea__description {
  margin-top: 10px;
  font-size: 15px;
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
