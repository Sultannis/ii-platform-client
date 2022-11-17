import request from "../request";
import type { IdeaDao } from "../dao/Idea.dao";
import type { QueryParamsDto } from "../converters/query-params/QueryParams.dto";
import type { MetaDao } from "../dao/Meta.dao";
import type { Idea } from "../entities/Idea";
import type { Meta } from "../entities/Meta";
import { mapQueryParamsForRequest } from "../converters/query-params/queryParamsRequestMapper";
import { mapIdeaDaoToEntity } from "../mappers/ideaMapper";
import { mapMetaDaoToEntity } from "../mappers/metaMapper";

export const fetchIdeasRequest = (
  queryParams: QueryParamsDto,
  fetchStartTimestamp: String
): Promise<[Idea[], Meta]> =>
  request
    .get("/ideas", {
      params: {
        start_timestamp: fetchStartTimestamp,
        ...mapQueryParamsForRequest(queryParams),
      },
    })
    .then((response) => {
      const ideaDaos = response.data.ideas as IdeaDao[];
      const meta = response.data.meta as MetaDao;

      return [ideaDaos.map(mapIdeaDaoToEntity), mapMetaDaoToEntity(meta)];
    });
