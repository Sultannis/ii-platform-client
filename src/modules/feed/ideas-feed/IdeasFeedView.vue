<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import IdeaCard from '@/modules/feed/ideas-feed/components/IdeaCard/IdeaCard.vue';
import CommonLoadingBlock from '@/common/components/CommonLoadingBlock/CommonLoadingBlock.vue';
import CommonAllFinishedBlock from '@/common/components/CommonAllFinishedBlock/CommonAllFinishedBlock.vue';
import {
  fetchInitialIdeasChunk,
  initalChunkLoaded,
  fetchNextIdeasChunkAndConcat,
  fetchIdeasQueryParams,
  ideasLoading,
  ideas,
} from '@/modules/feed/ideas-feed/composables/fetchIdeasFeed';
import {
  openPersonModal,
  setSelectedPersonId,
} from '@/common/composables/personModalState';
import { computed, onBeforeMount, ref, watch } from 'vue';

const feedLoadingTrigger = ref(null);
const feedLoadingTriggerVisible = useElementVisibility(feedLoadingTrigger);

const handleAuthorNicknameClick = (authorId: number) => {
  setSelectedPersonId(authorId);
  openPersonModal();
};

onBeforeMount(fetchInitialIdeasChunk);

const showAllFinishedBlock = computed(() => {
  return ideas.length === fetchIdeasQueryParams.total;
});

watch(feedLoadingTriggerVisible, () => {
  if (
    feedLoadingTriggerVisible.value &&
    initalChunkLoaded.value &&
    ideas.length < fetchIdeasQueryParams.total
  ) {
    fetchNextIdeasChunkAndConcat();
  }
});

const message = 'Looks like you have seen all ideas...';
</script>

<template>
  <div class="feed">
    <IdeaCard
      v-for="idea of ideas"
      :key="idea.id"
      :author-id="idea.authorId"
      :title="idea.title"
      :subtitle="idea.subtitle"
      @click="handleAuthorNicknameClick(idea.authorId)"
    />

    <CommonLoadingBlock v-if="ideasLoading" />
    <CommonAllFinishedBlock
      v-if="showAllFinishedBlock"
      :finished-entity="message"
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
  display: grid;
}
</style>
