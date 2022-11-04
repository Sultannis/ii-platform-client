import type { UserDao } from "../dao/User.dao";
import type { LoginUserDto } from "../dto/LoginUser.dto";
import type { RegisterUserDto } from "../dto/RegisterUser.dto";
import { mapRegisterUserDtoToDao } from "../mappers/user/registerUserMapper";
import { mapUserDaoToEntity } from "../mappers/user/userMappers";
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
