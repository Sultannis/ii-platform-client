<template>
  <div class="chat-header-loading">
    <div class="chat-header-loading__avatar" />
    <div class="chat-header-loading__info">
      <div class="chat-header-loading__name" />
      <div class="chat-header-loading__members" />
    </div>
  </div>
</template>

<style scoped>
.chat-header-loading {
  width: 100%;
  display: flex;
  align-items: center;
}

.chat-header-loading__avatar {
  margin-right: 15px;
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
}

.chat-header-loading__info {
  width: 100%;
}

.chat-header-loading__name {
  margin-bottom: 6px;
  width: 35%;
  height: 10px;
  border-radius: 10px;
}

.chat-header-loading__members {
  width: 25%;
  height: 10px;
  border-radius: 10px;
}

.chat-header-loading__avatar,
.chat-header-loading__name,
.chat-header-loading__members {
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}
</style>
