import { fetchPerson as fetchPersonRequest } from "@/api/repositories/person.respository";
import { InternalServerError, NotExistError } from "@/api/request";
import { reactive, ref } from "vue";
import { showErrorNotification } from "../helpers/notifications";

let person = reactive({});

const personFetchLoading = ref(false);

const startPersonLoading = () => {
  personFetchLoading.value = true;
};

const finishPersonLoading = () => {
  personFetchLoading.value = false;
};

const fetchPerson = async (personId: number) => {
  startPersonLoading();

  try {
    person = await fetchPersonRequest(personId);
  } catch (error) {
    if (error instanceof NotExistError) {
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
    finishPersonLoading();
  }
};

export const useFetchPerson = () => ({
  fetchPerson,
  personFetchLoading,
  person,
});
