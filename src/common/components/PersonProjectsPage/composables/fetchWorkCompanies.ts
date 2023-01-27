import type { WorkCompany } from "@/api/entities/WorkCompany";
import { fetchWorkCompaniesRequest } from "@/api/repositories/work-companies.repository"; 
import { InternalServerError } from "@/api/request";
import { reactive, ref, type Ref } from "vue";
import { showServerErrorNotification } from "@/common/helpers/notifications";

let workCompanies: WorkCompany[] = reactive([]);
let fetchWorkCompaniesQueryParams = reactive({
  page: 1,
  perPage: 20,
  total: 0,
});
let initialChunkLoaded: Ref<Boolean> = ref(false);
let totalWorkCompaniesCount: Ref<Number> = ref(0);
let workCompaniesLoading: Ref<Boolean> = ref(false);
let fetchStartTimestamp: Ref<String> = ref(new Date().toISOString());

const setInitialChunkLoadedAsTrue = () => {
  initialChunkLoaded.value = true;
};

const startWorkCompaniesLoading = () => {
  workCompaniesLoading.value = true;
};
const finishWorkCompaniesLoading = () => {
  workCompaniesLoading.value = false;
};

const clearWorkCompaniesArray = () => {
  workCompanies.length = 0;
};
const resetQueryParams = () => {
  fetchWorkCompaniesQueryParams = {
    page: 1,
    perPage: 20,
    total: 0,
  };
};

const resetFetchStartTimestamp = () => {
  fetchStartTimestamp.value = new Date().toISOString();
};

const fetchInitialWorkCompaniesChunk = async () => {
  resetFetchStartTimestamp();
  resetQueryParams();
  clearWorkCompaniesArray();
  startWorkCompaniesLoading();

  try {
    const [workCompaniesChunk, meta] = await fetchWorkCompaniesRequest(
      fetchWorkCompaniesQueryParams,
      fetchStartTimestamp.value
    );

    workCompanies.push(...workCompaniesChunk);
    fetchWorkCompaniesQueryParams.total = meta.total ? meta.total : 0;

    setInitialChunkLoadedAsTrue();
  } catch (error) {
    if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }
  } finally {
    finishWorkCompaniesLoading();
  }
};

const fetchNextWorkCompaniesChunkAndConcat = async () => {
  startWorkCompaniesLoading();

  fetchWorkCompaniesQueryParams.page++;

  try {
    const [peopleChunk, meta] = await fetchWorkCompaniesRequest(
      fetchWorkCompaniesQueryParams
    );

    workCompanies.push(...peopleChunk);
    totalWorkCompaniesCount.value = meta.total ? meta.total : 0;
  } catch (error) {
    if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }
  } finally {
    finishWorkCompaniesLoading();
  }
};

export {
  fetchInitialWorkCompaniesChunk,
  fetchNextWorkCompaniesChunkAndConcat,
  initialChunkLoaded,
  workCompaniesLoading,
  workCompanies,
  fetchWorkCompaniesQueryParams,
};
