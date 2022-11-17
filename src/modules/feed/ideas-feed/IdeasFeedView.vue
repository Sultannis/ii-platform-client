<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import IdeaCard from "@/modules/feed/ideas-feed/components/IdeaCard/IdeaCard.vue";
import CommonLoadingBlock from "@/common/components/CommonLoadingBlock/CommonLoadingBlock.vue";
import {
  fetchInitialIdeasChunk,
  fetchNextIdeasChunkAndConcat,
  ideas,
} from "@/modules/feed/ideas-feed/composables/fetchIdeasFeed";
import { onBeforeMount, ref, watch } from "vue";

const feedLoadingTrigger = ref(null);
const feedLoadingTriggerVisible = useElementVisibility(feedLoadingTrigger);

onBeforeMount(() => {
  fetchInitialIdeasChunk();
});

watch(feedLoadingTriggerVisible, () => {
  if (feedLoadingTriggerVisible.value) {
    fetchNextIdeasChunkAndConcat();
  }
});
</script>

<template>
  <div class="feed">
    <IdeaCard
      v-for="idea of ideas"
      :key="idea.id"
      :title="idea.title"
      :subtitle="idea.subtitle"
      :score="idea.score"
      :image-url="idea.mainImageUrl"
    />

    <CommonLoadingBlock />
    <div ref="feedLoadingTrigger" class="feed__loading-trigger" />
  </div>
</template>

<style scoped>
.feed {
  width: 100%;
  display: grid;
}
</style>
