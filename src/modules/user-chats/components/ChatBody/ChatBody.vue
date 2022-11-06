<template>
  <div class="chat-body">
    <slot />
  </div>
</template>

<style scoped>
.chat-body {
  background-image: url("@/assets/icons/chats/chat-bg.png");
  border-radius: 10px;
  background-size: contain;
  width: 100%;
  height: 100%;
}
</style>
