<script setup lang="ts"></script>

<template>
  <div v-ripple class="dashboard-header__notification">
    <i class="bx bx-bell dashboard-header__notification-icon" />
  </div>
</template>

<style scoped>
.dashboard-header__notification {
  margin-right: 15px;
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.dashboard-header__notification:hover {
  background-color: rgba(136, 136, 136, 0.13);
  transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.dashboard-header__notification-icon {
  font-size: 19px;
}
</style>
