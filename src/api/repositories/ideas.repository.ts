import request from "../request";
import type { IdeaDao } from "../dao/Idea.dao";
import type { QueryParamsDto } from "../converters/query-params/QueryParams.dto";
import { mapQueryParamsForRequest } from "../converters/query-params/queryParamsRequestMapper";
import { mapIdeaDaoToEntity } from "../mappers/ideaMapper";

export const fetchIdeasRequest = (queryParams: QueryParamsDto) =>
  request
    .get("/ideas", {
      params: mapQueryParamsForRequest(queryParams),
    })
    .then((response) => {
      const ideaDaos = response.data.ideas as IdeaDao[];
      const meta = response.data.meta as IdeaDao[];

      return ideaDaos.map(mapIdeaDaoToEntity);
    });
