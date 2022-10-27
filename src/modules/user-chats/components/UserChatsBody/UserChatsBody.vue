<script setup lang="ts">
import UserChatsBodyHeader from "./UserChatsBodyHeader.vue";
</script>

<template>
  <div class="user-chats-body">
    <user-chats-body-header />
  </div>
</template>

<style scoped>
.user-chats-body {
  background: linear-gradient(
      74.56deg,
      rgba(5, 255, 0, 0.142708) -2.19%,
      rgba(10, 149, 250, 0.2) 44.85%,
      rgba(142, 0, 255, 0.2) 69.98%,
      rgba(111, 0, 199, 0.2) 100.45%
    ),
    url("@/assets/icons/chats/chat-bg.png");
  border-radius: 10px;
  background-size: contain;
  width: 100%;
  height: 100%;
}
</style>
