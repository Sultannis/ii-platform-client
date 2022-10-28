<script setup lang="ts">
import { computed } from "@vue/reactivity";
import {
  openNewsModal,
  setSelectedNewsItemId,
} from "@/layouts/DashbardLayout/components/news-list/composables/newsModalState";

const { id, title, paragraph, date } = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const handleCardClick = () => {
  setSelectedNewsItemId(id);
  openNewsModal();
};

const paragraphProcessed = computed(() => `${paragraph.slice(0, 90)}...`);
</script>

<template>
  <div class="newscard" @click="handleCardClick">
    <div class="newscard__title">{{ title }}</div>
    <div class="newscard__paragraph">{{ paragraphProcessed }}</div>
    <div class="newscard__date">{{ date }}</div>
  </div>
</template>

<style scoped>
.newscard {
  margin-bottom: 15px;
  width: 340px;
  height: 140px;
  padding: 18px 20px 16px 20px;

  border-radius: 10px;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s linear;
}

.newscard:hover {
  transform: scale(1.03);
}

.newscard__title {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.newscard__paragraph {
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 400;

  overflow: hidden;
}

.newscard__date {
  font-size: 12px;
  font-weight: 500;
  color: #afafaf;
}
</style>
