<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { ChatRoomData } from "@/common/entity/chat-room";
import { scrollToBottom } from "@/common/helpers/scroll.helper";
import {
  socket,
  SocketEvent,
  joinedRoom,
  userId,
  subscribeOnMessage,
  updateChatMessage,
  startChatSocketLoading,
  finishChatSocketLoading,
} from "@/modules/user-chats/composables/chat-socket";
import type { ChatMessage } from "@/common/entity/chat-message";
import { useChatObserver } from "@/modules/user-chats/composables/chat-observer";
import ChatRoomTextArea from "./components/ChatRoomTextArea/ChatRoomTextArea.vue";
import ChatRoomBody from "@/modules/user-chats/views/ChatRoomView/components/ChatRoomBody/ChatRoomBody.vue";
import ChatRoomHeader from "@/modules/user-chats/views/ChatRoomView/components/ChatRoomHeader/ChatRoomHeader.vue";
import ChatRoomMessage from "./components/ChatRoomMessage/ChatRoomMessage.vue";

const route = useRoute();
const router = useRouter();

const roomId = route.params?.id as string;
const itemsRef = ref([]);
const messagesEnd = ref<HTMLElement>();
const chatWrapper = ref<HTMLElement>();

onMounted(() => {
  startChatSocketLoading();

  const chatObserver = useChatObserver(handleFetchMessages, "30px");
  const messagesObserver = useChatObserver(handleMessageVisibleInViewPort);
  socket.value.emit(SocketEvent.JOIN, { roomId });

  subscribeOnMessage(`${SocketEvent.JOIN}-${roomId}`, (data: ChatRoomData) => {
    joinedRoom.room = data.room;
    joinedRoom.meta = data.meta;
    data.messages.map(updateChatMessage);

    setTimeout(() => {
      itemsRef.value.forEach((el) => {
        messagesObserver.observe(el);
      });
      if (messagesEnd.value) {
        chatObserver.observe(messagesEnd.value);
      }
    }, 0);

    if (chatWrapper.value && joinedRoom.meta.page === 1) {
      scrollToBottom(chatWrapper.value);
    }

    finishChatSocketLoading();
  });
});

subscribeOnMessage(
  `${SocketEvent.MESSAGE}-${roomId}`,
  (payload: ChatMessage) => {
    updateChatMessage(payload);
    if (joinedRoom.meta.page === 1) {
      scrollToBottom(chatWrapper.value as HTMLElement);
    }
  }
);

document.addEventListener("keyup", (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    routerPushBack();
  }
});

onBeforeUnmount(() => {
  joinedRoom.messages = [];
  joinedRoom.meta.page = 1;

  document.removeEventListener("keyup", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      routerPushBack();
    }
  });
});

const handleMessageVisibleInViewPort = (
  entries: IntersectionObserverEntry[]
) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      const messageId = (entry.target as HTMLElement).dataset.id;
      const message = joinedRoom.messages.find((msg) => msg.id === messageId);

      if (!message?.readedAt && message?.user.id !== userId) {
        socket.value.emit(SocketEvent.MESSAGE_READ, { messageId, roomId });
      }
    }
  });
};

const handleFetchMessages = (entries: IntersectionObserverEntry[]) => {
  const { page, total, perPage } = joinedRoom.meta;
  const entry = entries[0];
  const maxPages = Math.floor(total / perPage);

  if (entry.intersectionRatio > 0 && page <= maxPages) {
    fetchMessagesWithPagination(page + 1);
  }
};

const fetchMessagesWithPagination = (page: number) => {
  socket.value.emit(SocketEvent.JOIN, { roomId, page });
};

const handleSendMessage = (value: string) => {
  socket.value.emit(SocketEvent.MESSAGE, { roomId, message: value });
};

const routerPushBack = () => {
  router.push({ name: "chat-rooms" });
};
</script>

<template>
  <div class="chat-room-view">
    <chat-room-body>
      <chat-room-header :room="joinedRoom.room" @back="routerPushBack" />
      <div ref="chatWrapper" class="chat-room-messages__inner">
        <Transition>
          <div v-if="joinedRoom.messages.length" class="chat-room__messages">
            <div ref="messagesEnd" class="chat-room__messages-end" />
            <div
              v-for="message in joinedRoom.messages"
              :key="message.id"
              :data-id="message.id"
              ref="itemsRef"
              class="message-item"
            >
              <chat-room-message
                :type="message.user.id === userId ? 'user' : 'participant'"
                :message="message"
              />
            </div>
          </div>
        </Transition>
      </div>
      <div class="chat-room-textarea">
        <chat-room-text-area @message="handleSendMessage" />
      </div>
    </chat-room-body>
  </div>
</template>

<style scoped>
.chat-room-messages__inner {
  padding: 20px 0 20px 0;
  overflow-y: overlay;
  overflow-x: hidden;
  height: calc(100% - 130px);
}

.chat-room__messages {
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-end;
  gap: 8px;
}

.message-item {
  display: flex;
}
</style>
