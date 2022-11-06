<script setup lang="ts">
import ChatRoomCard from "@/modules/user-chats/views/ChatRoomsView/components/ChatRoomCard/ChatRoomCard.vue";
import ChatRoomCardLoading from "@/modules/user-chats/components/ChatLoading/ChatRoomCardLoading.vue";
import {
  rooms,
  chatSocketLoading,
} from "@/modules/user-chats/composables/chat-socket";
</script>

<template>
  <div class="chat-rooms-view">
    <div class="chat-rooms-view__body">
      <Transition>
        <div class="position" v-if="chatSocketLoading">
          <chat-room-card-loading v-for="i in 3" :key="i" />
        </div>
        <div v-else>
          <chat-room-card v-for="room in rooms" :key="room.id" :room="room" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.chat-rooms-view {
  position: relative;
  padding: 15px 0;
  height: calc(100vh - 110px);
  background-color: #ffffff;
  border-radius: 10px;
}

.chat-rooms-view__body {
  padding: 0 15px;
  overflow-y: auto;
  height: 600px;
}

.position {
  width: 100%;
  position: absolute;
}
</style>
