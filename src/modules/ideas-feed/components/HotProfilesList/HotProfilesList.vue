<script setup lang="ts">
import HotProfileCard from "@/modules/ideas-feed/components/HotProfileCard/HotProfileCard.vue";
import { hotprofiles } from "@/modules/ideas-feed/composables/fetchHotprofilesList"
</script>

<template>
  <div class="list">
    <div class="list__header">
      <div class="list__left">
        <h2 class="list__heading">Горячие профили</h2>
      </div>
      <img
        src="@/assets/icons/🔥.svg"
        alt="Hot emoji"
        class="list__header-icon"
      />
    </div>
    <HotProfileCard
      v-for="hotprofile of hotprofiles"
      :name="hotprofile.name"
      :likes="hotprofile.likes"
      :image-url="hotprofile.imageUrl"
    />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  background: #ffffff;

  border: 1px solid var(--border-color);
  border-radius: 10px;

  padding-left: 16px;
  padding-right: 16px;
  padding: 10px 16px;
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

.list__left {
  display: flex;
  flex-direction: column;
}

.list__header-icon {
  width: 20px;
  height: 20px;
}

.list__heading {
  margin-bottom: -5px;
  font-weight: 600;
  font-size: 16px;
  color: var(--text-color);
}

</style>
