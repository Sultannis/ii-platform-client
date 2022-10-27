<script setup lang="ts">
import UserChatsSidebarBurger from "./UserChatsSidebarBurger.vue";
import UserChatsSidebarSearch from "./UserChatsSidebarSearch.vue";
import UserChatsSidebarRoomCard from "./UserChatsSidebarRoomCard.vue";
</script>

<template>
  <div class="user-chats-sidebar">
    <div class="user-chats-sidebar__header">
      <user-chats-sidebar-burger />
      <user-chats-sidebar-search />
    </div>
    <div class="user-chats-sidebar__body">
      <user-chats-sidebar-room-card v-for="i in 3" :key="i" :active="i === 1" />
    </div>
  </div>
</template>

<style scoped>
.user-chats-sidebar {
  padding: 8px 18px 20px 20px;
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  height: calc(100vh - 120px);
  overflow: hidden;
}

.user-chats-sidebar__header {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.user-chats-sidebar__body {
  padding-bottom: 20px;
  overflow: auto;
  max-height: calc(100vh - 120px);
}
</style>
