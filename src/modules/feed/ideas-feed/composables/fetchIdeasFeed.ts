import type { QueryParamsDto } from "@/api/converters/query-params/QueryParams.dto";
import type { Idea } from "@/api/entities/Idea";
import { fetchIdeasRequest } from "@/api/repositories/ideas.repository";
import { InternalServerError } from "@/api/request";
import { showServerErrorNotification } from "@/common/helpers/notifications";
import { reactive, ref, type Ref } from "vue";

const ideas: Idea[] = reactive([]);
let totalIdeasCount: Ref<Number> = ref(0);
let ideasLoading: Ref<Boolean> = ref(false);

const startIdeasLoading = () => {
  ideasLoading.value = true;
};
const finishIdeasLoading = () => {
  ideasLoading.value = true;
};

const fetchIdeasChunkAndConcat = async (queryParams: QueryParamsDto) => {
  startIdeasLoading();

  try {
    const [ideasChunk, meta] = await fetchIdeasRequest(queryParams);

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

export { fetchIdeasChunkAndConcat, ideas };
