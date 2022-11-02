<script setup lang="ts">
import { chatRooms } from "../../composables/chatSocket";
import ChatRoomCard from "@/modules/user-chats/components/ChatRoomCard/ChatRoomCard.vue";
</script>

<template>
  <div class="chat-rooms-view">
    <div class="chat-rooms-view__body">
      <chat-room-card v-for="room in chatRooms" :key="room.id" :room="room" />
    </div>
  </div>
</template>

<style scoped>
.chat-rooms-view {
  padding: 15px;
  height: calc(100vh - 100px);
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
