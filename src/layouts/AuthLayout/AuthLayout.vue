<script setup lang="ts">
import CommonTransition from "@/common/components/CommonTransition/CommonTransition.vue";
</script>

<template>
  <div class="layout">
    <RouterLink to="/feed/new" class="layout__back">
      <i class="bx bxs-chevron-left layout__back-icon" />
      Back to home page
    </RouterLink>
    <div class="layout__content">
      <div class="layout__logo">
        <i class="bx bxs-meteor layout__logo-icon"></i>
        NOTIO
      </div>
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
  position: relative;
  display: flex;
  align-items: center;
}

.layout__content {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.layout__back {
  position: absolute;
  left: 40px;
  top: 34px;

  display: flex;
  align-items: center;
  color: var(--primary-color);
  cursor: pointer;
}

.layout__back-icon {
  margin-right: 10px;
  font-size: 25px;
}

.layout__logo {
  margin: 10px;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 25px;

  text-transform: uppercase;

  display: flex;
  align-items: center;
}

.layout__logo-icon {
  margin-right: 10px;
}
</style>
