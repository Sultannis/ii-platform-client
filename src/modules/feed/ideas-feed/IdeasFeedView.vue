<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import IdeaCard from "@/modules/feed/ideas-feed/components/IdeaCard/IdeaCard.vue";
import CommonLoadingBlock from "@/common/components/CommonLoadingBlock/CommonLoadingBlock.vue";
import { ideas } from "@/modules/feed/ideas-feed/composables/fetchIdeasFeed";
import { ref, watch } from "vue";

const feedLoadingTrigger = ref(null);
const feedLoadingTriggerVisible = useElementVisibility(feedLoadingTrigger);

watch(feedLoadingTriggerVisible, () => {
  console.log(feedLoadingTriggerVisible.value);
});
</script>

<template>
  <div class="feed">
    <IdeaCard
      v-for="idea of ideas"
      :key="idea.title"
      :title="idea.title"
      :description="idea.description"
      :score="idea.score"
      :image-url="idea.mainImageUrl"
    />
    <div style="width: 100%; height: 200vh"></div>

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
