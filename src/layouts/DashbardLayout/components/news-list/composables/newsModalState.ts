import { news } from "@/layouts/DashbardLayout/components/news-list/composables/fetchNewsList";
import { reactive, ref } from "vue";

let selectedNewsItem = reactive({ id: 0, title: "", paragraph: "", date: "" });

let newsModalVisible = ref(false);

const setSelectedNewsItemId = (newsItemId: number) => {
  const foundNewsItem = news.find((newsItem) => newsItem.id === newsItemId);

  if (foundNewsItem) {
    selectedNewsItem.id = foundNewsItem.id;
    selectedNewsItem.title = foundNewsItem.title;
    selectedNewsItem.paragraph = foundNewsItem.paragraph;
    selectedNewsItem.date = foundNewsItem.date;
  }
};

const openNewsModal = () => {
  newsModalVisible.value = true;
};
const closeNewsModal = () => {
  newsModalVisible.value = false;
};

export {
  selectedNewsItem,
  newsModalVisible,
  setSelectedNewsItemId,
  openNewsModal,
  closeNewsModal,
};
