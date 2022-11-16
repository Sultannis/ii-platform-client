import request from "../request";
import type { UserDao } from "../dao/User.dao";
import type { IdeaDao } from "../dao/Idea.dao";
import type { LoginUserDto } from "../converters/login-user/LoginUser.dto";
import type { QueryParamsDto } from "../converters/query-params/QueryParams.dto";
import { mapQueryParamsForRequest } from "../converters/query-params/queryParamsMapper";
import { mapUserDaoToEntity } from "../mappers/userMappers";
import { mapIdeaDaoToEntity } from "../mappers/ideaMapper";

export const fetchIdeas = (queryParams: QueryParamsDto) =>
  request
    .get("/ideas", {
      params: mapQueryParamsForRequest(queryParams),
    })
    .then((response) => {
      const ideaDaos = response.data.ideas as IdeaDao[];

      return ideaDaos.map(mapIdeaDaoToEntity);
    });
