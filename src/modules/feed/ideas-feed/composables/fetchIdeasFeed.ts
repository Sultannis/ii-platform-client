import type { QueryParamsDto } from "@/api/converters/query-params/QueryParams.dto";
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
let totalIdeasCount: Ref<Number> = ref(0);
let ideasLoading: Ref<Boolean> = ref(false);

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
  ideas = [];
};

const fetchInitialIdeasChunk = async () => {
  resetQueryParams();
  clearIdeas();

  startIdeasLoading();

  try {
    const [ideasChunk, meta] = await fetchIdeasRequest(fetchIdeasQueryParams);

    ideas.concat(ideasChunk);
    fetchIdeasQueryParams.total = meta.total ? meta.total : 0;
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
    const [ideasChunk, meta] = await fetchIdeasRequest(fetchIdeasQueryParams);

    ideas.concat(ideasChunk);
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
