<script setup lang="ts">
import { chatMenuButtonType } from "@/modules/user-chats/composables/chatControlls";

const emit = defineEmits(["arrow-back", "burger-click"]);

const handleEmitButtonClick = () => {
  chatMenuButtonType.value === "arrow"
    ? emit("arrow-back")
    : emit("burger-click");
};
</script>

<template>
  <div class="chat-menu-button" @click="handleEmitButtonClick">
    <div
      :class="[
        'animated-menu-icon',
        { 'state-back-arrow': chatMenuButtonType === 'arrow' },
      ]"
    />
  </div>
</template>

<style scoped>
.chat-menu-button {
  margin-right: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transition: 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.chat-menu-button:hover {
  background-color: var(--theme-dark-secondary-color);
  transition: 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.animated-menu-icon {
  background-color: var(--theme-dark-grey-color);
  width: 50%;
  height: 2px;
  border-radius: 8px;
  transition: transform 0.25s;
  transform: rotate(0);
}

.animated-menu-icon::before {
  content: "";
  background-color: var(--theme-dark-grey-color);
  width: 100%;
  height: 2px;
  border-radius: 8px;
  position: absolute;
  top: -6px;
}

.animated-menu-icon::after {
  content: "";
  background-color: var(--theme-dark-grey-color);
  width: 100%;
  height: 2px;
  border-radius: 8px;
  position: absolute;
  top: 6px;
}

.animated-menu-icon.state-back-arrow {
  transform: rotate(180deg);
}

.animated-menu-icon.state-back-arrow::before {
  width: 80%;
  transform: rotate(45deg) scaleX(0.75) translate(10px, -4px);
}

.animated-menu-icon.state-back-arrow::after {
  width: 80%;
  transform: rotate(-45deg) scaleX(0.75) translate(10px, 4px);
}
</style>
