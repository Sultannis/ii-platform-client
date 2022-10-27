<script setup lang="ts">
import IdeaCard from "@/modules/ideas-feed/components/IdeaCard.vue";
import { ideas } from "@/modules/ideas-feed/composables/fetchIdeasFeed";
</script>

<template>
  <div class="feed">
    <IdeaCard
      v-for="idea of ideas"
      :key="idea.title"
      :title="idea.title"
      :description="idea.description"
      :score="idea.score"
      :image-url="idea.imageUrl"
    />
  </div>
</template>
