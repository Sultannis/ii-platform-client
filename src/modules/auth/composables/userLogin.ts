import { ref } from "vue";
import { loginUser as loginUserRequest } from "@/api/repositories/users.repository";
import { useAuthenticate } from "@/common/composables/authenticate";
import { useUser } from "@/common/composables/user";
import {
  showErrorNotification,
  showServerErrorNotification,
} from "@/common/helpers/notifications";
import type { LoginUserDto } from "@/api/converters/login-user/LoginUser.dto";
import {
  IncorrectDataError,
  InternalServerError,
  NotExistError,
} from "@/api/request";

const { setUser } = useUser();
const { setAuth } = useAuthenticate();

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
        "Incorrect data",
        "You entered the wrong password. Please check your details and try again"
      );
    } else if (error instanceof NotExistError) {
      showErrorNotification(
        "This user does not exist",
        "User with this email is not registered"
      );
    } else if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }

    throw error;
  } finally {
    finishUserLoginLoading();
  }
};

export const useUserLogin = () => ({ userLoginLoading, loginUser });
