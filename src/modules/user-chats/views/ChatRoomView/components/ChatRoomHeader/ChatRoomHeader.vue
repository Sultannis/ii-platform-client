<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { ChatRoom } from "@/common/entity/chat-room";
import { wordDeclension } from "@/common/helpers/word-declension";
import { chatParticipantWords } from "@/common/constants/chatParticipantWords";
import {
  chatSocketLoading,
  userId,
} from "@/modules/user-chats/composables/chat-socket";
import ChatHeaderLoading from "@/modules/user-chats/components/ChatLoading/ChatHeaderLoading.vue";

const emit = defineEmits(["back"]);
const props = defineProps({
  room: {
    type: Object as PropType<ChatRoom>,
    default: () => ({}),
  },
});

const direct = computed(() => {
  return props.room.participants.find((row) => row.userId !== userId);
});

const handleBackButtonClick = () => emit("back");
</script>

<template>
  <Transition>
    <div class="chat-room-header">
      <button
        class="chat-room-header__back-button"
        @click="handleBackButtonClick"
      >
        <i class="bx bx-undo chat-room-header__back-button__icon" />
      </button>
      <template v-if="chatSocketLoading">
        <chat-header-loading />
      </template>
      <template v-else-if="!chatSocketLoading && room">
        <div
          :style="{
            backgroundColor:
              room.type === 2
                ? direct?.chatColor
                : room.backgroundColor ?? '#fff',
          }"
          class="chat-room-header__avatar"
        >
          {{ room.type === 2 ? direct?.name[0] : room.name[0] }}
        </div>
        <div class="chat-room-header__info">
          <div class="chat-room-header__name">
            {{ room.type === 2 ? direct?.name : room.name }}
          </div>
          <div class="chat-room-header__status">
            <template v-if="room.type !== 2">
              {{ room.participantsAmount }}
              {{
                wordDeclension(
                  room.participantsAmount ?? 1,
                  chatParticipantWords
                )
              }}
            </template>
          </div>
        </div>
      </template>
    </div>
  </Transition>
</template>

<style scoped>
.chat-room-header {
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
}

.chat-room-header__back-button {
  margin-right: 10px;
  width: 40px;
  height: 40px;
  font-size: 28px;
  outline: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: var(--theme-light-primary-color);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.chat-room-header__back-button:hover {
  background-color: rgba(136, 136, 136, 0.13);
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.chat-room-header__avatar {
  margin-right: 15px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: purple;
  border-radius: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-room-header__name {
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: var(--text-color);
}

.chat-room-header__status {
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: var(--theme-light-primary-color);
}
</style>
