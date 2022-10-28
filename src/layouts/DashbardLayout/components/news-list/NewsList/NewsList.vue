<script setup lang="ts">
import NewsCard from "@/layouts/DashbardLayout/components/news-list/NewsCard/NewsCard.vue";
import { news } from "@/layouts/DashbardLayout/components/news-list/composables/fetchNewsList";
</script>

<template>
    <div>
        <NewsCard
            v-for="newsItem of news"
            :id = "newsItem.id"
            :title="newsItem.title"
            :paragraph="newsItem.paragraph"
            :date="newsItem.date"
        />
    </div>
</template>