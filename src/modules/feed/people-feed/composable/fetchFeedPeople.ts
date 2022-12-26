import type { Person } from "@/api/entities/Person";
import { fetchPeopleRequest } from "@/api/repositories/person.respository";
import { InternalServerError } from "@/api/request";
import { showServerErrorNotification } from "@/common/helpers/notifications";
import { reactive, ref, type Ref } from "vue";

let people: Person[] = reactive([]);
let fetchPeopleQueryParams = reactive({
  page: 1,
  perPage: 20,
  total: 0,
});
let initalChunkLoaded: Ref<Boolean> = ref(false);
let totalPeopleCount: Ref<Number> = ref(0);
let peopleLoading: Ref<Boolean> = ref(false);
let fetchStartTimestamp: Ref<String> = ref(new Date().toISOString());

const setInitialChuckLoadedAsTrue = () => {
  initalChunkLoaded.value = true;
};

const startPeopleLoading = () => {
  peopleLoading.value = true;
};
const finishPeopleLoading = () => {
  peopleLoading.value = false;
};

const clearPeopleArray = () => {
  people.length = 0;
};
const resetQueryParams = () => {
  fetchPeopleQueryParams = {
    page: 1,
    perPage: 20,
    total: 0,
  };
};

const resetFetchStartTimestamp = () => {
  fetchStartTimestamp.value = new Date().toISOString();
};

const fetchInitialPeopleChunk = async () => {
  resetFetchStartTimestamp();
  resetQueryParams();
  clearPeopleArray();
  startPeopleLoading();

  try {
    const [peopleChunk, meta] = await fetchPeopleRequest(
      fetchPeopleQueryParams,
      fetchStartTimestamp.value
    );

    people.push(...peopleChunk);
    fetchPeopleQueryParams.total = meta.total ? meta.total : 0;

    setInitialChuckLoadedAsTrue();
  } catch (error) {
    if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }
  } finally {
    finishPeopleLoading();
  }
};

const fetchNextPeopleChunkAndConcat = async () => {
  startPeopleLoading();

  fetchPeopleQueryParams.page++;

  try {
    const [peopleChunk, meta] = await fetchPeopleRequest(
      fetchPeopleQueryParams,
      fetchStartTimestamp.value
    );

    people.push(...peopleChunk);
    totalPeopleCount.value = meta.total ? meta.total : 0;
  } catch (error) {
    if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }
  } finally {
    finishPeopleLoading();
  }
};

export {
  fetchInitialPeopleChunk,
  fetchNextPeopleChunkAndConcat,
  initalChunkLoaded,
  peopleLoading,
  people,
  fetchPeopleQueryParams,
};
