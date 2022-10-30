<script setup lang="ts">
import HotProfilesList from "./components/HotProfilesList/HotProfilesList.vue";
import IdeaCard from "@/modules/ideas-feed/components/IdeaCard/IdeaCard.vue";
import { ideas } from "@/modules/ideas-feed/composables/fetchIdeasFeed";
</script>

<template>
  <div class="feed">
    <div class="feed__ideas">
      <IdeaCard
        v-for="idea of ideas"
        :title="idea.title"
        :description="idea.description"
        :score="idea.score"
        :image-url="idea.imageUrl"
      />
    </div>
    <div class="feed__right">
      <HotProfilesList />
    </div>
  </div>
</template>

<style scoped>
.feed {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 405px;
}

.feed__ideas {
  margin-right: 20px;
}

.feed__right {
  max-width: 405px;
  min-width: 405px;
}
</style>
