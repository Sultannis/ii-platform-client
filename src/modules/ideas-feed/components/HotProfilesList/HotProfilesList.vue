<script setup lang="ts">
import HotProfileCard from "@/modules/ideas-feed/components/HotProfileCard/HotProfileCard.vue";
</script>

<template>
  <div class="list">
    <div class="list__header">
      <div class="list__left">
        <h4 class="list__heading">Горячие профили</h4>
        <div class="list__subtext">сегодня</div>
      </div>
      <img
        src="@/assets/icons/hot-emoji.png"
        alt="Hot emoji"
        class="list__header-icon"
      />
    </div>
    <HotProfileCard />
    <HotProfileCard />
    <HotProfileCard />
    <HotProfileCard />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;

  border: 1px solid var(--border-color);
  border-radius: 10px;

  overflow: hidden;
  color: #ffffff;
}

.list__header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background: var(--background-light);
}

.list__left {
  display: flex;
  flex-direction: column;
}

.list__header-icon {
  width: 35px;
  height: 35px;
}

.list__heading {
  margin-bottom: -5px;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
}

.list__subtext {
  color: var(--text-grey);
}
</style>
