<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";

const emit = defineEmits(["message"]);
const input = ref<HTMLInputElement>();
const message = ref("");

onMounted(() => {
  input.value?.focus();
});

const clearTextarea = () => {
  message.value = "";
};

const emitSendMessage = () => {
  if (!message.value.trim()) {
    return;
  }

  emit("message", message.value);
  clearTextarea();
};
</script>

<template>
  <div class="chat-room-textarea">
    <input
      v-model="message"
      placeholder="Напишите что-нибудь..."
      ref="input"
      @keypress.enter="emitSendMessage"
    />
    <button class="chat-room-textarea__button" @click="emitSendMessage">
      <i class="bx bxs-send chat-room-textarea__button-icon" />
    </button>
  </div>
</template>

<style scoped>
.chat-room-textarea {
  position: relative;
  margin: 0 auto;
  width: 85%;
  display: flex;
  align-items: flex-end;
}
.chat-room-textarea input {
  height: 56px;
  padding: 20px 40px;
  border: 0;
  outline: none;
  resize: none;
  background: #ffffff;
  border-radius: 10px 10px 0px 10px;
  width: calc(100% - 65px);
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
}

.chat-room-textarea input::placeholder {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #bbbbbb;
}

.chat-room-textarea::after {
  content: "";
  background-image: url("@/assets/icons/chats/apendix-right.svg");
  background-size: contain;
  width: 9px;
  height: 20px;
  position: absolute;
  right: 57px;
  bottom: -3px;
}

.chat-room-textarea__button {
  margin-left: 10px;
  padding: 0;
  width: 56px;
  height: 56px;
  font-size: 30px;
  border-radius: 100%;
  border: 0;
  outline: none;
  color: var(--theme-light-primary-color);
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

/* .chat-room-textarea__button:hover {
  background-color: var(--theme-light-primary-color);
  color: #fff;
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
} */

.chat-room-textarea__button:hover.chat-room-textarea__button-icon {
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.chat-room-textarea__button-icon {
  margin-left: 4px;
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
</style>
