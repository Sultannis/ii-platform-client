import type { WorkCompany } from "@/api/entities/WorkCompany";
import { fetchPersonWorkCompaniesRequest } from "@/api/repositories/work-companies.repository";
import { reactive, ref, type Ref } from "vue";
import { showServerErrorNotification } from "@/common/helpers/notifications";

let workCompanies: WorkCompany[] = reactive([]);
let workCompaniesLoading: Ref<Boolean> = ref(false);

const startWorkCompaniesLoading = () => {
  workCompaniesLoading.value = true;
};
const finishWorkCompaniesLoading = () => {
  workCompaniesLoading.value = false;
};

const clearWorkCompaniesArray = () => {
  workCompanies.length = 0;
};

const fetchPersonWorkCompanies = async (personId: number) => {
  clearWorkCompaniesArray();
  startWorkCompaniesLoading();

  try {
    const workCompaniesEntities = await fetchPersonWorkCompaniesRequest(
      personId
    );

    workCompanies.push(...workCompaniesEntities);
  } catch (error) {
    showServerErrorNotification();
  } finally {
    finishWorkCompaniesLoading();
  }
};

export const useFetchWorkCompany = () => ({ 
  workCompaniesLoading, 
  workCompanies, 
  fetchPersonWorkCompanies, 
});
