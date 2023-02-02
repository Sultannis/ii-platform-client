<script setup lang="ts">
import PersonCard from '@/modules/feed/people-feed/components/PersonCard/PersonCard.vue';
import {
  fetchInitialPeopleChunk,
  fetchNextPeopleChunkAndConcat,
  fetchPeopleQueryParams,
  initialChunkLoaded,
  people,
} from '@/modules/feed/people-feed/composable/fetchFeedPeople';
import {
  openPersonModal,
  setSelectedPersonId,
} from '@/common/composables/personModalState';
import { onBeforeMount, ref, watch } from 'vue';
import { useElementVisibility } from '@vueuse/core';

const feedLoadingTrigger = ref(null);
const feedLoadingTriggerVisible = useElementVisibility(feedLoadingTrigger);

onBeforeMount(fetchInitialPeopleChunk);

const handlePersonCardClick = (personId: number) => {
  setSelectedPersonId(personId);
  openPersonModal();
};

watch(feedLoadingTriggerVisible, () => {
  if (
    feedLoadingTriggerVisible.value &&
    initialChunkLoaded.value &&
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
      :first-name="person.firstName"
      :last-name="person.lastName"
      :occupation="person.occupation"
      :avatar-url="person.avatarUrl"
      :interactions-count="person.interactionsCount"
      @click="handlePersonCardClick(person.id)"
    />
    <div
      ref="feedLoadingTrigger"
      class="feed__loading-trigger"
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

.ant-input {
  margin: 20px;
  background: #ccc;
}
</style>
