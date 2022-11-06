<template>
  <Transition>
    <div class="chat-room-card-loading">
      <div class="chat-room-card-loading__avatar" />
      <div class="chat-room-card-loading__info">
        <div class="chat-room-card-loading__name" />
        <div class="chat-room-card-loading__message" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.chat-room-card-loading {
  margin-bottom: 6px;
  padding: 10px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}

.chat-room-card-loading__avatar {
  margin-right: 12px;
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-room-card-loading__info {
  width: 100%;
}

.chat-room-card-loading__name {
  margin-bottom: 6px;
  width: 20%;
  height: 12px;
  border-radius: 10px;
}

.chat-room-card-loading__message {
  width: 45%;
  height: 10px;
  border-radius: 10px;
}

.chat-room-card-loading__avatar,
.chat-room-card-loading__name,
.chat-room-card-loading__message {
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}
</style>
