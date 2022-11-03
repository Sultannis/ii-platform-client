import { ref } from "vue";
import { loginAdmin as loginAdminRequest } from "@/api/repositories/admins.repository";
import { useAuthenticate } from "@/common/composables/useAuthenticate";
import { useAdmin } from "@/common/composables/useAdmin";
import { showErrorNotification } from "@/common/helpers/notifications";
import type { LoginAdminDto } from "@/api/dto/LoginAdmin.dto";
import {
  IncorrectDataError,
  InternalServerError,
  NotExistError,
} from "@/api/request";

const { setAuth } = useAuthenticate();
const { setAdmin } = useAdmin();

const loginAdminLoading = ref(false);
const startLoginAdminLoading = () => {
  loginAdminLoading.value = true;
};
const finishLoginAdminLoading = () => {
  loginAdminLoading.value = false;
};

const loginAdmin = async (form: LoginAdminDto) => {
  startLoginAdminLoading();

  const payload: LoginAdminDto = {
    email: form.email.trim(),
    password: form.password.trim(),
  };

  try {
    const [admin, authToken] = await loginAdminRequest(payload);

    setAuth({ authToken });
    setAdmin(admin);
  } catch (error) {
    if (error instanceof IncorrectDataError) {
      showErrorNotification(
        "Неверные данные",
        "Вы ввели неверный пароль. Пожалуйста, проверьте данные и попробуйте снова"
      );
    } else if (error instanceof NotExistError) {
      showErrorNotification(
        "Админ не существует",
        "Админ с такой почтой не зарегистрирован. Если вам нужно создать или восстановить аккаунт свяжитесь с тех поддержкой"
      );
    } else if (error instanceof InternalServerError) {
      showErrorNotification(
        "Что-то пошло не так",
        "Произошла непредвиденная ошибка. Пожалуйста обратитесь в службу технической поддержки."
      );
    }

    throw error;
  } finally {
    finishLoginAdminLoading();
  }
};

export const useAdminLogin = () => ({ loginAdminLoading, loginAdmin });
