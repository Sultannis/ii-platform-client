<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { useChatSocketIO } from "../../composables/chatSocket";

onBeforeMount(() => {
  useChatSocketIO();
});
</script>

<template>
  <div class="user-chats-view">
    <RouterView />
  </div>
</template>
