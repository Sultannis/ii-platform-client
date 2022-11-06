<script setup lang="ts">
import { RouterView } from "vue-router";
import { useChatSocket } from "@/modules/user-chats/composables/chat-socket";

useChatSocket();
</script>

<template>
  <div class="user-chats-view">
    <RouterView />
  </div>
</template>
