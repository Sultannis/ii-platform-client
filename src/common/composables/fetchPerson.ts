import type { Person } from "@/api/entities/Person";
import { fetchPerson as fetchPersonRequest } from "@/api/repositories/person.respository";
import { InternalServerError, NotExistError } from "@/api/request";
import { reactive, ref } from "vue";
import {
  showErrorNotification,
  showServerErrorNotification,
} from "../helpers/notifications";

let person = ref({} as Person);

const personFetchLoading = ref(true);

const startPersonLoading = () => {
  personFetchLoading.value = true;
};

const finishPersonLoading = () => {
  personFetchLoading.value = false;
};

const fetchPerson = async (personId: number) => {
  startPersonLoading();

  try {
    person.value = await fetchPersonRequest(personId);
  } catch (error) {
    if (error instanceof NotExistError) {
      showErrorNotification(
        "This user does not exist",
        "User with this email is not registered"
      );
    } else if (error instanceof InternalServerError) {
      showServerErrorNotification();
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
