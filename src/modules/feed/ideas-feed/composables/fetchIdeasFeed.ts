import type { QueryParamsDto } from "@/api/converters/query-params/QueryParams.dto";
import type { Idea } from "@/api/entities/Idea";
import { fetchIdeasRequest } from "@/api/repositories/ideas.repository";
import { reactive } from "vue";

const ideasList: Idea[] = reactive([]);
const fetchIdeasChunk = async (queryParams: QueryParamsDto) => {
  const ideasChunk = await fetchIdeasRequest(queryParams);
  ideasList.concat(ideasChunk);
};

export { fetchIdeasChunk, ideasList };
