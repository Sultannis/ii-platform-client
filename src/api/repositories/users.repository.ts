import type { UserDao } from "../dao/User.dao";
import type { LoginUserDto } from "../converters/login-user/LoginUser.dto";
import type { RegisterUserDto } from "../converters/register-user/RegisterUser.dto";
import { mapRegisterUserDtoToDao } from "../converters/register-user/registerUserMapper";
import { mapUserDaoToEntity } from "../mappers/userMappers";
import request from "../request";

export const registerUser = (payload: RegisterUserDto) =>
  request
    .post("/users/register", mapRegisterUserDtoToDao(payload))
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
