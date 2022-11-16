import type { QueryParamsDto } from "@/api/converters/query-params/QueryParams.dto";
import type { Idea } from "@/api/entities/Idea";
import { fetchIdeasRequest } from "@/api/repositories/ideas.repository";
import { reactive } from "vue";

const ideas: Idea[] = reactive([]);

const fetchIdeasChunk = async (queryParams: QueryParamsDto) => {
  const ideasChunk = await fetchIdeasRequest(queryParams);
  ideas.concat(ideasChunk);
};

export { fetchIdeasChunk, ideas };
