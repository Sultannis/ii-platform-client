<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import ChatBody from "./components/ChatBody/ChatBody.vue";
import { useChatSocketIO } from "@/modules/user-chats/composables/chatSocket";

onBeforeMount(() => {
  useChatSocketIO();
});
</script>

<template>
  <div class="user-chats-view">
    <chat-body>
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
