import type { WorkCompany } from "@/api/entities/WorkCompany";
import { fetchWorkCompany as fetchWorkCompanyRequest } from "@/api/repositories/work-companies.repository";
import { InternalServerError, NotExistError } from "@/api/request";
import { reactive, ref } from "vue";
import {
  showErrorNotification,
  showServerErrorNotification,
} from "../helpers/notifications";

let workCompany = ref({} as WorkCompany);

const workCompanyFetchLoading = ref(true);

const startWorkCompanyLoading = () => {
  workCompanyFetchLoading.value = true;
};

const finishWorkCompanyLoading = () => {
  workCompanyFetchLoading.value = false;
};

const fetchWorkCompany = async (personId: number) => {
  startWorkCompanyLoading();

  try {
    workCompany.value = await fetchWorkCompanyRequest(personId);
  } catch (error) {
    if (error instanceof NotExistError) {
      showErrorNotification(
        "Пользователь не существует",
        "Пользователь с такой почтой не зарегистрирован"
      );
    } else if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }

    throw error;
  } finally {
    finishWorkCompanyLoading();
  }
};

export const useFetchWorkCompany = () => ({
  fetchWorkCompany,
  workCompanyFetchLoading,
  workCompany,
});
