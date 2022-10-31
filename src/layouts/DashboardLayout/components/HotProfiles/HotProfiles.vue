<script setup lang="ts">
import HotProfileCard from "@/layouts/DashboardLayout/components/HotProfileCard/HotProfileCard.vue";
import { hotprofiles } from "@/common/composables/fetchHotprofilesList";
</script>

<template>
  <div class="list">
    <div class="list__header">
      <div class="list__heading">Горячие профили</div>
      <img
        src="@/assets/icons/fire-emoji.svg"
        alt="Hot emoji"
        class="list__header-icon"
      />
    </div>
    <HotProfileCard
      v-for="hotprofile of hotprofiles"
      :name="hotprofile.name"
      :interactionsCount="hotprofile.interactionsCount"
      :image-url="hotprofile.imageUrl"
    />
  </div>
</template>

<style scoped>
.list {
  padding-left: 16px;
  padding-right: 16px;
  padding: 10px 16px;
  background: #ffffff;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.list__header {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 15px;
  background: var(--background-light);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list__header-icon {
  width: 20px;
  height: 20px;
}

.list__heading {
  font-weight: 600;
  font-size: 16px;
  color: var(--text-color);
}
</style>
