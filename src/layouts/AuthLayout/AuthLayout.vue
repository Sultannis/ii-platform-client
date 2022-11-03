<script setup lang="ts">
import CommonTransition from "@/common/components/CommonTransition/CommonTransition.vue";
</script>

<template>
  <div class="layout">
    <div class="layout__back">
      <i class="bx bxs-chevron-left layout__back-icon" />
    </div>
    <div class="layout__content">
      <div class="layout__logo"><common-logo size="big" /></div>
      <RouterView v-slot="{ Component }">
        <CommonTransition>
          <component :is="Component" :key="$route.fullPath" />
        </CommonTransition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
}

.layout__content {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.layout__back-button {
  position: relative;
  left: 40px;
  top: 34px;
}

.layout__logo {
  margin: 8% 0 20px;
}
</style>
