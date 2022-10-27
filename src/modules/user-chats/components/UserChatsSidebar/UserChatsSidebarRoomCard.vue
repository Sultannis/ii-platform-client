<script setup lang="ts">
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-ripple
    :class="['user-chats-sidebar__card', { 'card-active': active }]"
  >
    <div class="user-chats-sidebar__card-avatar">
      <span>ОБ</span>
    </div>
    <div class="user-chats-sidebar__card-info">
      <h3 class="user-chats-sidebar__card-title">
        #Общий
        <span class="user-chats-sidebar__card-date">12:48</span>
      </h3>
      <div class="user-chats-sidebar__card-message">
        Sultan: <span>Тестовое сообщение</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-chats-sidebar__card {
  margin-bottom: 6px;
  padding: 10px 10px 10px 12px;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  transition: border-color 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.user-chats-sidebar__card:last-child {
  margin-bottom: 0;
}

.user-chats-sidebar__card:hover {
  background-color: #f6f6f6;
  transition: border-color 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.user-chats-sidebar__card-avatar {
  margin-right: 10px;
  width: 45px;
  height: 45px;
  background: #faa774;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-chats-sidebar__card-avatar span {
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
}

.user-chats-sidebar__card-title {
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d2044;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-chats-sidebar__card-title span {
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #9d9d9d;
}

.user-chats-sidebar__card-message {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #0d2044;
}

.user-chats-sidebar__card-message span {
  color: #9d9d9d;
}

.user-chats-sidebar__card.card-active {
  background-color: #6f00c7;
  cursor: default;
}

.user-chats-sidebar__card.card-active .user-chats-sidebar__card-title,
.user-chats-sidebar__card.card-active .user-chats-sidebar__card-message,
.user-chats-sidebar__card.card-active .user-chats-sidebar__card-message span,
.user-chats-sidebar__card.card-active .user-chats-sidebar__card-date {
  color: #ffffff;
}

@media screen and (max-width: 1140px) {
  .user-chats-sidebar__card-title,
  .user-chats-sidebar__card-message {
    display: none;
  }

  .user-chats-sidebar__card {
    margin-right: 0;
    padding: 8px 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-chats-sidebar__card-avatar {
    margin-right: 0;
  }

  .user-chats-sidebar__card-avatar span {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
