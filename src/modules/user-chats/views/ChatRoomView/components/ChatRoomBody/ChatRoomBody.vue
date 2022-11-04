<script setup lang="ts"></script>

<template>
  <div class="chat-room-body">
    <slot />
  </div>
</template>

<style scoped>
.chat-room-body {
  position: relative;
  height: calc(100vh - 110px);
  background: linear-gradient(
      74.56deg,
      rgba(5, 255, 0, 0.142708) -2.19%,
      rgba(10, 149, 250, 0.2) 44.85%,
      rgba(142, 0, 255, 0.2) 69.98%,
      rgba(111, 0, 199, 0.2) 100.45%
    ),
    url("@/assets/icons/chats/chat-bg.png");
  background-size: contain;
  border-radius: 10px;
}
</style>
