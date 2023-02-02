<script setup lang="ts">
const emit = defineEmits(['click']);

defineProps({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: false,
  },
  interactionsCount: {
    type: Number,
    required: false,
  },
  avatarUrl: {
    type: String,
    required: false,
  },
});

const emitClick = () => {
  emit('click');
};

const defaultAvatar =
  'https://www.ktoeos.org/wp-content/uploads/2021/11/default-avatar.png';
</script>

<template>
  <div
    class="person"
    @click="emitClick"
  >
    <div class="person__data">
      <img
        v-if="avatarUrl"
        :src="avatarUrl"
        alt=""
        class="person__image"
      />
      <img
        v-else
        :src="defaultAvatar"
        class="person__image"
      />
      <div class="person__row">
        <div class="person__info">
          <div class="person__name">{{ firstName }} {{ lastName }}</div>
          <div class="person__occupation">
            {{ occupation }}
          </div>
        </div>
        <a-tooltip
          placement="top"
          color="rgba(68, 56, 202, 0.684)"
        >
          <template #title>
            <span>Количество взаимодействии</span>
          </template>
          <div class="person__interactions-count">
            {{ interactionsCount }}
          </div>
        </a-tooltip>
      </div>
    </div>
    <div class="person__row">
      <div class="person__action">
        <i class="bx bx-conversation person__icon person__icon_margin-right" />
        Chat
      </div>
      <div class="person__action">
        <i class="bx bx-bookmark person__icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.person {
  margin-bottom: 10px;
  width: 32%;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  color: #4338ca;

  display: flex;
  flex-direction: column;
  transition-duration: 0.2s;
  justify-content: space-between;
}

.person__data {
  display: flex;
  flex-direction: column;
}
.person:hover {
  background: var(--background-highlighted-color);
}

.person__name {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
}

.person__interactions-count {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
}

.person__info {
  display: flex;
  flex-direction: column;
}

.person__row {
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  cursor: default;
}

.person__occupation {
  font-weight: 600;
  color: var(--text-color-light);
  font-size: 13px;
}

.person__image {
  border-radius: 6px;
}

.person__action {
  cursor: pointer;
  font-weight: 600;
  color: var(--text-color-light);

  display: flex;
  align-items: center;
}

.person__icon {
  font-size: 20px;
}

.person__icon_margin-right {
  margin-right: 10px;
}

.person__action:hover {
  color: var(--text-color);
  transition: color 0.2s linear;
}
</style>
