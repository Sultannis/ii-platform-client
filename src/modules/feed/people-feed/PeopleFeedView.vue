<script setup lang="ts">
import PersonCard from "@/modules/feed/people-feed/components/PersonCard/PersonCard.vue";
import { fetchInitialPeopleChunk, fetchNextPeopleChunkAndConcat, fetchPeopleQueryParams, initalChunkLoaded, people } from "@/modules/feed/people-feed/composable/fetchFeedPeople";
import { openPersonModal } from "@/common/composables/personModalState";
import { onBeforeMount, ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";

const feedLoadingTrigger = ref(null);
const feedLoadingTriggerVisible = useElementVisibility(feedLoadingTrigger);

onBeforeMount(fetchInitialPeopleChunk);

watch(feedLoadingTriggerVisible, () => {
  if (
    feedLoadingTriggerVisible.value &&
    initalChunkLoaded.value &&
    people.length < fetchPeopleQueryParams.total
  ) {
    fetchNextPeopleChunkAndConcat();
  }
});
</script>

<template>
  <div class="feed">
    <PersonCard
      v-for="person in people"
      :fist-name="person.firstName"
      :last-name="person.lastName"
      :occupation="person.occupation"
      :img-url="person.imgUrl"
      :interactions-count="person.interactionsCount"
      @click="openPersonModal"
    />
    <div ref="feedLoadingTrigger" class="feed__loading-trigger" />
  </div>
</template>

<style scoped>
.feed {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ant-input {
  margin: 20px;
  background: #ccc;
}
</style>
