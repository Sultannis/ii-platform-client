import type { UserDao } from "../dao/User.Dao";
import type { LoginUserDto } from "../dto/LoginUser.dto";
import { mapUserDaoToEntity } from "../mappers/userMappers";
import request from "../request";

export const loginUser = (payload: LoginUserDto) =>
  request.post("/users/login", payload).then((response) => {
    const authDao = response.data.auth;
    const userDao = response.data.user as UserDao;

    const authToken = authDao.token;
    const user = mapUserDaoToEntity(userDao);

    return [user, authToken];
  });
