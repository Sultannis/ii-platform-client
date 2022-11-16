import type { UserDao } from "../dao/User.dao";
import type { LoginUserDto } from "../converters/login-user/LoginUser.dto";
import { mapRegisterUserDtoToDao } from "../converters/register-user/registerUserMapper";
import { mapUserDaoToEntity } from "../mappers/userMappers";
import request from "../request";
import type { QueryParamsDto } from "../converters/query-params/QueryParams.dto";
import { mapQueryParamsForRequest } from "../converters/query-params/queryParamsMapper";

export const fetchIdeas = (queryParams: QueryParamsDto) =>
  request
    .get("/ideas", {
      params: mapQueryParamsForRequest(queryParams),
    })
    .then((response) => {
      const authDao = response.data.auth;
      const userDao = response.data.user as UserDao;

      const authToken = authDao.token;
      const user = mapUserDaoToEntity(userDao);

      return [user, authToken];
    });

export const loginUser = (payload: LoginUserDto) =>
  request.post("/users/login", payload).then((response) => {
    const authDao = response.data.auth;
    const userDao = response.data.user as UserDao;

    const authToken = authDao.token;
    const user = mapUserDaoToEntity(userDao);

    return [user, authToken];
  });
