<script setup lang="ts">
import { RouterView } from "vue-router";
import ChatBody from "./components/ChatBody/ChatBody.vue";
</script>

<template>
  <div class="user-chats-view">
    <chat-body>
      Chat
      <RouterView />
    </chat-body>
  </div>
</template>

<style scoped>
.user-chats-view {
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
