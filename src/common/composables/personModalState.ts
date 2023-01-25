import { ref, type Ref } from "vue";
import {
  setBodyOverflowOvelay,
  setBodyOverflowHidden,
} from "../helpers/body-overflow-switchers";

const personModalVisible = ref(false);
const selectedPersonId = ref(0);

const setSelectedPersonId = (personId: number) => {
  selectedPersonId.value = personId;
};

const openPersonModal = () => {
  personModalVisible.value = true;
  setBodyOverflowHidden();
};

const closePersonModal = () => {
  personModalVisible.value = false;
  setBodyOverflowOvelay();
};

export {
  personModalVisible,
  selectedPersonId,
  openPersonModal,
  closePersonModal,
  setSelectedPersonId,
};
