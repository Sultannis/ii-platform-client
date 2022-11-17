import type { Idea } from "@/api/entities/Idea";
import { fetchIdeasRequest } from "@/api/repositories/ideas.repository";
import { InternalServerError } from "@/api/request";
import { showServerErrorNotification } from "@/common/helpers/notifications";
import { reactive, ref, type Ref } from "vue";

let ideas: Idea[] = reactive([]);
let fetchIdeasQueryParams = reactive({
  page: 1,
  perPage: 20,
  total: 0,
});
let initalChuckLoaded: Ref<Boolean> = ref(false);
let totalIdeasCount: Ref<Number> = ref(0);
let ideasLoading: Ref<Boolean> = ref(false);
let fetchStartTimestamp: Ref<String> = ref(new Date().toISOString());

const setInitialChuckLoadedAsTrue = () => {
  initalChuckLoaded.value = true;
};

const startIdeasLoading = () => {
  ideasLoading.value = true;
};
const finishIdeasLoading = () => {
  ideasLoading.value = true;
};

const resetQueryParams = () => {
  fetchIdeasQueryParams = {
    page: 1,
    perPage: 20,
    total: 0,
  };
};

const clearIdeas = () => {
  ideas = reactive([]);
};

const resetFetchStartTimestamp = () => {
  fetchStartTimestamp.value = new Date().toISOString();
};

const fetchInitialIdeasChunk = async () => {
  resetQueryParams();

  startIdeasLoading();

  try {
    const [ideasChunk, meta] = await fetchIdeasRequest(
      fetchIdeasQueryParams,
      fetchStartTimestamp.value
    );

    console.log(ideasChunk);
    ideas.push(...ideasChunk);
    console.log(ideas);
    fetchIdeasQueryParams.total = meta.total ? meta.total : 0;

    setInitialChuckLoadedAsTrue();
  } catch (error) {
    if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }
  } finally {
    finishIdeasLoading();
  }
};

const fetchNextIdeasChunkAndConcat = async () => {
  startIdeasLoading();

  try {
    const [ideasChunk, meta] = await fetchIdeasRequest(
      fetchIdeasQueryParams,
      fetchStartTimestamp.value
    );

    ideas.push(...ideasChunk);
    totalIdeasCount.value = meta.total ? meta.total : 0;
  } catch (error) {
    if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }
  } finally {
    finishIdeasLoading();
  }
};

export {
  fetchInitialIdeasChunk,
  fetchNextIdeasChunkAndConcat,
  ideasLoading,
  ideas,
  fetchIdeasQueryParams,
};
