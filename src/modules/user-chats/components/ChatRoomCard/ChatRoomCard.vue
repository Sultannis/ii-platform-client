<script setup lang="ts">
import type { PropType } from "vue";
import { formatToChatDate } from "@/common/utils/date-formatter";
import type { ChatRoom } from "@/common/entity/chat-room";

defineProps({
  room: {
    type: Object as PropType<ChatRoom>,
    default: () => ({}),
  },
});

const NO_MESSAGE = "Чат создан";
</script>

<template>
  <router-link
    :to="{ name: 'chat-room', params: { id: room.id } }"
    class="chat-room-card__link"
  >
    <div
      :class="['chat-room-card', { active: room.not_readed_messages_amount }]"
    >
      <div class="chat-room-card__avatar">
        <span>{{ room.name[0] + room.name[1] }}</span>
      </div>
      <div class="chat-room-card__info">
        <div class="chat-room-card__info-inner">
          <div class="chat-room-card__name">
            <span>{{ room.name }}</span>
          </div>
          <div class="chat-room-card__date">
            {{ formatToChatDate(room.message?.created_at || room.created_at) }}
          </div>
        </div>
        <div class="chat-room-card__info-inner">
          <div class="chat-room-card__message">
            <span v-if="room.message?.user"
              >{{ room.message?.user.first_name }}:</span
            >
            {{ room.message?.message ?? NO_MESSAGE }}
          </div>
          <div
            v-if="room.not_readed_messages_amount"
            class="chat-room-card__amount"
          >
            {{ room.not_readed_messages_amount }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.chat-room-card__link {
  text-decoration: none;
  color: inherit;
}
.chat-room-card {
  margin-bottom: 6px;
  padding: 10px;
  width: 100%;
  text-decoration: none;
  color: #262f4c;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.chat-room-card:hover {
  background-color: #f6f6f6;
}

.chat-room-card__avatar {
  margin-right: 12px;
  width: 40px;
  height: 40px;
  background-color: #7bc862;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-room-card__avatar span {
  color: #fff;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  text-transform: uppercase;
}

.chat-room-card__name {
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #262f4c;
}

.chat-room-card__info {
  width: calc(100% - 52px);
}

.chat-room-card__info-inner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-room-card__date {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #262f4c;
}

.chat-room-card__message {
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #262f4c;
}

.chat-room-card__message span {
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #262f4c;
}

.chat-room-card.active {
  background: rgba(67, 56, 202, 0.13);
}

.chat-room-card.active:hover {
  background: rgba(67, 56, 202, 0.13);
}

.chat-room-card.active .chat-room-card__name,
.chat-room-card.active .chat-room-card__date {
  color: #4338ca;
}

.chat-room-card__amount {
  width: 18px;
  height: 18px;
  background-color: #4338ca;
  color: #fff;
  border-radius: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
