import { ref } from "vue";
import { loginUser as loginUserRequest } from "@/api/repositories/users.repository";
import { setAuth } from "@/common/composables/authenticate";
import { useUser } from "@/common/composables/user";
import { showErrorNotification } from "@/common/helpers/notifications";
import type { LoginUserDto } from "@/api/dto/LoginUser.dto";
import {
  IncorrectDataError,
  InternalServerError,
  NotExistError,
} from "@/api/request";

const { setUser } = useUser();

const userLoginLoading = ref(false);
const startUserLoginLoading = () => {
  userLoginLoading.value = true;
};
const finishUserLoginLoading = () => {
  userLoginLoading.value = false;
};

const loginUser = async (form: LoginUserDto) => {
  startUserLoginLoading();

  const payload: LoginUserDto = {
    email: form.email.trim(),
    password: form.password.trim(),
  };

  try {
    const [user, authToken] = await loginUserRequest(payload);

    setAuth({ authToken });
    setUser(user);
  } catch (error) {
    if (error instanceof IncorrectDataError) {
      showErrorNotification(
        "Неверные данные",
        "Вы ввели неверный пароль. Пожалуйста, проверьте данные и попробуйте снова"
      );
    } else if (error instanceof NotExistError) {
      showErrorNotification(
        "Пользователь не существует",
        "Пользователь с такой почтой не зарегистрирован"
      );
    } else if (error instanceof InternalServerError) {
      showErrorNotification(
        "Что-то пошло не так",
        "Произошла непредвиденная ошибка. Обратитесь в службу технической поддержки."
      );
    }

    throw error;
  } finally {
    finishUserLoginLoading();
  }
};

export const useUserLogin = () => ({ userLoginLoading, loginUser });
