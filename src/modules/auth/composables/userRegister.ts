import { ref } from "vue";
import { registerUser as registerUserRequest } from "@/api/repositories/users.repository";
import { useAuthenticate } from "@/common/composables/authenticate";
import { useUser } from "@/common/composables/user";
import {
  showErrorNotification,
  showServerErrorNotification,
} from "@/common/helpers/notifications";
import type { RegisterUserDto } from "@/api/converters/register-user/RegisterUser.dto";
import {
  IncorrectDataError,
  InternalServerError,
  DbConcurrencyError,
} from "@/api/request";

const { setUser } = useUser();
const { setAuth } = useAuthenticate();

const userRegisterLoading = ref(false);
const startUserRegisterLoading = () => {
  userRegisterLoading.value = true;
};
const finishUserRegisterLoading = () => {
  userRegisterLoading.value = false;
};

const registerUser = async (form: RegisterUserDto) => {
  startUserRegisterLoading();

  const payload: RegisterUserDto = {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    email: form.email.trim(),
    password: form.password.trim(),
  };

  try {
    const [user, authToken] = await registerUserRequest(payload);

    setAuth({ authToken });
    setUser(user);
  } catch (error) {
    if (error instanceof IncorrectDataError) {
      showErrorNotification(
        "Неверные данные",
        "Вы ввели неверный пароль. Пожалуйста, проверьте данные и попробуйте снова"
      );
    } else if (error instanceof DbConcurrencyError) {
      showErrorNotification(
        "Пользователь уже существует",
        "Пользователь с такой почтой уже зарегистрирован"
      );
    } else if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }

    throw error;
  } finally {
    finishUserRegisterLoading();
  }
};

export const useUserRegister = () => ({ userRegisterLoading, registerUser });
