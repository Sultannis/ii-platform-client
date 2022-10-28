import { news } from "@/layouts/DashbardLayout/components/news-list/composables/fetchNewsList"
import { reactive, ref } from "vue"

let selectedNewsItemId = ref(0)
let selectedNewsItem = reactive({id:0, title:"", paragraph:"", date:""})
let newsModalVisible = ref(false)
const setSelectedNewsItemId = (newsItemId:number) => {
    selectedNewsItemId.value = newsItemId
    const foundNewsItem = news.find(newsItem=>newsItem.id === selectedNewsItemId.value)
    console.log(foundNewsItem)
    if(foundNewsItem) {
        selectedNewsItem.id = foundNewsItem.id
        selectedNewsItem.title = foundNewsItem.title
        selectedNewsItem.paragraph = foundNewsItem.paragraph
        selectedNewsItem.date = foundNewsItem.date
    }
}
const openNewsModal = () => {
    newsModalVisible.value = true
}
const closeNewsModal = () => {
    newsModalVisible.value = false
}

export { selectedNewsItem, setSelectedNewsItemId, openNewsModal, closeNewsModal, newsModalVisible }
