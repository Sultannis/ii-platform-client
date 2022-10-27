<script setup lang="ts">
import DashboardHeader from "@/layouts/DashbardLayout/components/DashboardHeader/DashboardHeader.vue";
import UserChatsSidebar from "@/modules/user-chats/components/UserChatsSidebar/UserChatsSidebar.vue";
import UserChatsBody from "./components/UserChatsBody/UserChatsBody.vue";
</script>

<template>
  <dashboard-header />
  <div class="user-chats-view">
    <user-chats-sidebar />
    <user-chats-body />
  </div>
</template>

<style scoped>
.user-chats-view {
  padding: 20px 32px 0 32px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
}

@media screen and (max-width: 1140px) {
  .user-chats-view {
    padding: 20px 15px 0 15px;
    grid-template-columns: 95px 1fr;
  }
}
</style>
