<script setup lang="ts">
import { onMounted, ref, type PropType } from "vue";
import type { ChatMessage } from "@/common/entity/chat-message";
import { formatToTimeDate } from "@/common/utils/date-formatter";
import ChatAppendix from "@/modules/user-chats/components/ChatAppendix/ChatAppendix.vue";
import { updateChatMessage } from "@/modules/user-chats/composables/chat-socket";

const elementRef = ref<HTMLDivElement>();
const props = defineProps({
  message: {
    type: Object as PropType<ChatMessage>,
    default: () => ({}),
  },
  type: {
    type: String as PropType<"user" | "participant">,
    default: "participant",
  },
});

onMounted(() => {
  const position = (elementRef.value as HTMLDivElement).offsetTop;
  updateChatMessage({ ...props.message, position });
});
</script>

<template>
  <div ref="elementRef" :class="['chat-room-messages__wrap', type]">
    <div
      v-if="type === 'participant'"
      :style="{ backgroundColor: message.user.chatColor ?? '#EC4040' }"
      class="chat-room-message__avatar"
    >
      <span>{{ message.user.firstName[0] }}</span>
    </div>
    <div :class="['chat-room-message', type]">
      <chat-appendix
        :color="type === 'user' ? '#EFFDDE' : '#ffffff'"
        :type="type === 'user' ? 'right' : 'left'"
        :class="['chat-room-message__appendix', { right: type === 'user' }]"
      />
      <div
        v-if="type === 'participant'"
        :style="{ color: message.user.chatColor ?? '#EC4040' }"
        class="chat-room-message__name"
      >
        {{ message.user.firstName }}
        {{ message.user.lastName }}
      </div>
      <div class="chat-room-message__info">
        <div class="chat-room-message__text">{{ message.message }}</div>
        <div class="chat-room-message__date">
          {{ formatToTimeDate(message.createdAt) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-room-messages__wrap {
  display: flex;
  align-items: flex-end;
}

.chat-room-message {
  position: relative;
  padding: 6px 12px;
  border-radius: 10px 10px 10px 0;
  background-color: #ffffff;
  display: inline-block;
}

.chat-room-message.user {
  border-radius: 10px 10px 0 10px;
}

.chat-room-message__appendix {
  width: 9px;
  height: 20px;
  position: absolute;
  left: -8px;
  bottom: -1px;
}

.chat-room-message__appendix.right {
  left: unset;
  right: -8px;
  bottom: -3px;
}

.chat-room-message__avatar {
  margin-right: 8px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.chat-room-message__avatar img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.chat-room-message__name {
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}

.chat-room-message__text {
  max-width: 385px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}

.chat-room-message__info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.chat-room-message__date {
  margin-left: 15px;
  font-weight: 500;
  font-size: 9px;
  line-height: 10px;
  color: #9d9d9d;
}

.chat-room-messages__wrap.user {
  margin-left: auto;
}

.chat-room-messages__wrap.user .chat-room-message {
  background-color: #effdde;
}

.chat-room-messages__wrap.user .chat-room-message__text {
  color: #000;
}

.chat-room-messages__wrap.user .chat-room-message__date {
  color: #6db566;
}
</style>
