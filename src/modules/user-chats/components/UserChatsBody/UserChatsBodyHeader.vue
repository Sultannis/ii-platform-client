<script setup lang="ts">
const emit = defineEmits(["show-members"]);
defineProps({
  title: {
    type: String,
    default: "",
  },
  membersCount: {
    type: Number,
    default: 0,
  },
});

const emitShowMembers = () => emit("show-members");
</script>

<template>
  <div v-ripple class="user-chats-body__header" @click="emitShowMembers">
    <h3 class="user-chats-body__header-title">#Общий</h3>
    <div class="user-chats-body__header-members">3 участника</div>
  </div>
</template>

<style scoped>
.user-chats-body__header {
  padding: 8px 30px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
}

.user-chats-body__header-title {
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #0d2044;
}

.user-chats-body__header-members {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #6f00c7;
}
</style>
