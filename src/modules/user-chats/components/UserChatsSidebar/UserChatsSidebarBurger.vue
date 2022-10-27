<script setup lang="ts">
import BurgerIcon from "@/assets/icons/chats/burger-icon.svg";
</script>

<template>
  <div class="user-chats-sidebar__burger">
    <img
      :src="BurgerIcon"
      alt="burger"
      class="user-chats-sidebar__burger-icon"
    />
  </div>
</template>

<style scoped>
.user-chats-sidebar__burger {
  margin-right: 22px;
}

.user-chats-sidebar__burger-icon {
  cursor: pointer;
}
</style>
