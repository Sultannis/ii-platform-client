<script setup lang="ts">
import PersonCard from "@/modules/feed/people-feed/components/PersonCard/PersonCard.vue";
import CommonModal from "@/common/components/CommonModal/CommonModal.vue";
import { feedPeople } from "@/modules/feed/people-feed/composable/fetchFeedPeople";
</script>

<template>
  <div class="feed">
    <PersonCard
      v-for="person in feedPeople"
      :name="person.name"
      :occupation="person.occupation"
      :img-url="person.imgUrl"
      :interactions-count="person.interactionsCount"
    />
  </div>
</template>

<style scoped>
.feed {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
