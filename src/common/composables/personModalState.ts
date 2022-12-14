import { ref } from "vue";
import {
  setBodyOverflowOvelay,
  setBodyOverflowHidden,
} from "../helpers/body-overflow-switchers";

const personModalVisible = ref(false);

const openPersonModal = () => {
  personModalVisible.value = true;
  setBodyOverflowHidden();
};

const closePersonModal = () => {
  personModalVisible.value = false;
  setBodyOverflowOvelay();
};

export { personModalVisible, openPersonModal, closePersonModal };
