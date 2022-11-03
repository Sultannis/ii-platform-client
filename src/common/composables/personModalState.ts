import { ref } from "vue";
import {
  setBodyOverflowAuto,
  setBodyOverflowHidden,
} from "../helpers/body-overflow-switchers";

const personModalVisible = ref(true);

const openPersonModal = () => {
  personModalVisible.value = true;
  setBodyOverflowHidden();
};

const closePersonModal = () => {
  personModalVisible.value = false;
  setBodyOverflowAuto();
};

export { personModalVisible, openPersonModal, closePersonModal };
